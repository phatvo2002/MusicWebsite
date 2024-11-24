using MUS.Entities.DTO;
using MUS.Model;

namespace MUS.Services.Interface
{
    public interface IThuVienServices
    {
        Task<ResultModel> AddThuVien(ThuVienModal modal);

        Task<ResultModel> AddThuVienBaiNahc(ThuVienBaiNhacModal modal);

        Task<List<ThuVienBaiNhacDTO>> GetThuVienBaiNhacByThuVienId(Guid Id);

        Task<ResultModel> DeleteThuVienBaiNhac(Guid ThuVienId, Guid BaiNhacId);
    }
}
