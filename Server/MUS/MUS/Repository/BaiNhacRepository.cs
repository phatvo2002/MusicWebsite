using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MUS.Entities;
using MUS.Entities.DTO;
using MUS.Helper;
using MUS.Model;
using MUS.Repository.Interface;
using System.Net.WebSockets;

namespace MUS.Repository
{
    public class BaiNhacRepository : IBaiNhacRepository
    {
        public readonly MusDbConText _musDbConText;
        public readonly IMapper _mapper;
        public BaiNhacRepository(MusDbConText musDbConText , IMapper mapper)
        {
            _musDbConText = musDbConText;
            _mapper = mapper;
        }
        public async Task<ResultModel> AddBaiNhac(BaiNhacModel model)
        {
            var db = _musDbConText.BaiNhacs.FirstOrDefault(r => r.Id == model.Id);
            try
            {
                if (db == null)
                {
                    BaiNhac baiNhac = new BaiNhac();
                    baiNhac.Id = Guid.NewGuid();
                    baiNhac.TenBaiNhac = model.TenBaiNhac;
                    baiNhac.NgayPhatHanh = model.NgayPhatHanh;
                    baiNhac.ThoiLuong = model.ThoiLuong;
                    baiNhac.LuotNghe = model.LuotNghe;
                    baiNhac.LoiBaiHat = model.LoiBaiHat;
                    baiNhac.NhacSiId = model.NhacSiId;
                    baiNhac.TheLoaiId = model.TheLoaiId;
                    baiNhac.TamTrangId = model.TamTrangId;
                    baiNhac.AlbumId = model.AlbumId ?? null;
                    baiNhac.QuocGiaId = model.QuocGiaId;
                    baiNhac.ChudeId = model.ChudeId ?? null;
                    if (model.DuongDanHinhAnh != null && model.DuongDanHinhAnh.Length > 0)
                    {
                        var res = Untils.UploadFileImage(model.DuongDanHinhAnh);
                        if (!string.IsNullOrEmpty(res))
                        {
                            baiNhac.DuongDanHinhAnh = res;
                        }
                    };
                    if (model.DuongDanBanner != null && model.DuongDanBanner.Length > 0)
                    {
                        var res = Untils.UploadFileImage(model.DuongDanBanner);
                        if (!string.IsNullOrEmpty(res))
                        {
                            baiNhac.DuongDanBanner = res;
                        }
                    }
                    if (model.DuongDanFileAmNhac != null && model.DuongDanFileAmNhac.Length > 0)
                    {
                        baiNhac.KichThuoc = model.DuongDanFileAmNhac.Length;
                        baiNhac.TenFile = model.DuongDanFileAmNhac.FileName;
                        var audioUrl = await Untils.UploadFileMP3(model.DuongDanFileAmNhac);
                        if (!string.IsNullOrEmpty(audioUrl))
                        {
                            baiNhac.DuongDanFileAmNhac = audioUrl;
                        }
                    }
                    _musDbConText.BaiNhacs.Add(baiNhac);
                    await _musDbConText.SaveChangesAsync();
                    return new ResultModel() { Status = 200, Message = "Thêm mới thành công" ,Success=true };
                 }
                return new ResultModel() { Status = 202, Message = "Bài nhạc đã tồn tại trong hệ thống" ,Success =false };
            }
            catch(DbUpdateException ex )
            {
                return new ResultModel() { Status = 500, Message = ex.InnerException?.Message, Success = false };
            } 
        }

        public async Task<ResultModel> DeleteBaiNhac(Guid id)
        {
            var db = _musDbConText.BaiNhacs.Where(r => r.Id == id).FirstOrDefault();
            if (db != null)
            {
                if (!string.IsNullOrEmpty(db.DuongDanBanner))
                {
                    try
                    {
                        var deletebanner = Untils.DeleteFile(db.DuongDanBanner!);
                    }
                    catch { }
                }
                if (!string.IsNullOrEmpty(db.DuongDanHinhAnh))
                {
                    try
                    {
                        var deleteHinhAnh= Untils.DeleteFile(db.DuongDanHinhAnh!);
                    }
                    catch { }
                }
                if (!string.IsNullOrEmpty(db.DuongDanFileAmNhac))
                {
                    try
                    {
                        var deleteFileAmNhac = Untils.DeleteFile(db.DuongDanFileAmNhac!);
                    }
                    catch { }
                }
                _musDbConText.BaiNhacs.Remove(db);
                await _musDbConText.SaveChangesAsync();
                return new ResultModel() { Status = 200, Message = "Xóa thành công", Success = true };
            }
            return new ResultModel() { Status = 202, Message = "Không tìm thấy dữ liệu", Success = false };
        }

        public async Task<List<BaiNhacDTO>> GetAllBaiNhac()
        {
            var db = await _musDbConText.BaiNhacs.AsNoTracking().Include(r => r.NhacSi).ToListAsync();
            return _mapper.Map<List<BaiNhacDTO>>(db);
        }

       

        public async Task<BaiNhacDTO> GetBaiNhacById(Guid id)
        {
            var db =await _musDbConText.BaiNhacs.Where(r => r.Id == id).Include(r=> r.NhacSi).FirstOrDefaultAsync();
            return _mapper.Map<BaiNhacDTO>(db);
        }

    
        public async Task<ResultModel> UpdateBaiNhac(UpdateBaiNhacModel model)
        {
            var db = _musDbConText.BaiNhacs.FirstOrDefault(r => r.Id == model.Id);
            try
            {
                if (db != null)
                {
                    db.TenBaiNhac = model.TenBaiNhac;
                    db.NgayPhatHanh = model.NgayPhatHanh;
                    db.LoiBaiHat = model.LoiBaiHat;
                    db.ThoiLuong = model.ThoiLuong;
                    db.AlbumId = model.AlbumId;
                    db.TheLoaiId = model.TheLoaiId;
                    db.NhacSiId = model.NhacSiId;
                    db.ChudeId = model.ChudeId;
                    db.TamTrangId = model.TamTrangId;
                    _musDbConText.BaiNhacs.Update(db);
                    await _musDbConText.SaveChangesAsync();
                    return new ResultModel() { Status = 200, Message = "Chỉnh sửa thành công", Success = true };
                }
                return new ResultModel() { Status = 202, Message = "Không tìm thấy dữ liệu", Success = false };
            }
            catch (Exception ex)
            {
                return new ResultModel() { Status = 500, Message = ex.Message, Success = false };
            }
            throw new NotImplementedException();
        }

        public async Task<ResultModel> UpdateView(Guid id)
        {
            var db = _musDbConText.BaiNhacs.FirstOrDefault(r => r.Id == id);
            if(db != null)
            {
                db.LuotNghe += 1;
                _musDbConText.BaiNhacs.Update(db);
                await _musDbConText.SaveChangesAsync();
              return new ResultModel() { Status = 200, Message = "Chỉnh sửa thành công", Success = true };
            }
            else
            {
                return new ResultModel() { Status = 202, Message = "Không tìm thấy dữ liệu", Success = true };
            } 
                
        }
        public async Task<List<BaiNhacDTO>> GetBaiNhacByAlBumId(Guid albumId)
        {
            var db = await _musDbConText.BaiNhacs.Where(r=> r.AlbumId == albumId).AsNoTracking().ToListAsync();
            return _mapper.Map<List<BaiNhacDTO>>(db);
        }
        public async Task<List<BaiNhacDTO>> GetBaiNhacByNhacSiId(Guid nhacSiId)
        {
            var db = await _musDbConText.BaiNhacs.Where(r => r.NhacSiId == nhacSiId).AsNoTracking().ToListAsync();
            return _mapper.Map<List<BaiNhacDTO>>(db);
        }

        public async Task<List<BaiNhacDTO>> GetBaiNhacByQuocGiaId(int quocGiaId)
        {
            var db = await _musDbConText.BaiNhacs.Where(r => r.QuocGiaId == quocGiaId).AsNoTracking().ToListAsync();
            return _mapper.Map<List<BaiNhacDTO>>(db);
        }

        public async Task<List<BaiNhacDTO>> GetBaiNhacByTamTrangid(Guid tamTrangId)
        {
            var db = await _musDbConText.BaiNhacs.Where(r => r.TamTrangId == tamTrangId).AsNoTracking().ToListAsync();
            return _mapper.Map<List<BaiNhacDTO>>(db);
        }

        public async Task<List<BaiNhacDTO>> GetBainhacByTheLoaiId(Guid theLoaiId)
        {
            var db = await _musDbConText.BaiNhacs.Where(r => r.TheLoaiId == theLoaiId).AsNoTracking().ToListAsync();
            return _mapper.Map<List<BaiNhacDTO>>(db);
        }

    }
}
