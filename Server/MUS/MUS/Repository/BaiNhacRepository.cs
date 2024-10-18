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
        public BaiNhacRepository(MusDbConText musDbConText)
        {
            _musDbConText = musDbConText;
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
                    baiNhac.AlbumId = model.AlbumId;
                    baiNhac.ChudeId = model.ChudeId;
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
            catch(Exception ex)
            {
                return new ResultModel() { Status = 500, Message = ex.Message, Success = false };
            } 
        }

        public Task<ResultModel> DeleteBaiNhac(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<List<BaiNhacDTO>> GetAllBaiNhac()
        {
            throw new NotImplementedException();
        }

        public Task<BaiNhacDTO> GetBaiNhacById(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<ResultModel> UpdateBaiNhac(BaiNhacModel model)
        {
            throw new NotImplementedException();
        }
    }
}
