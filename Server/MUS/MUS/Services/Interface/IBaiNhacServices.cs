using MUS.Entities.DTO;
using MUS.Model;

namespace MUS.Services.Interface
{
    public interface IBaiNhacServices
    {
        Task<ResultModel> AddBaiNhac(BaiNhacModel model);
         Task<List<BaiNhacDTO>> GetAllBaiNhac();

         Task<BaiNhacDTO> GetBaiNhacById(Guid id);

         Task<ResultModel> UpdateBaiNhac(UpdateBaiNhacModel model);

         Task<ResultModel> DeleteBaiNhac(Guid id);
    }
}
