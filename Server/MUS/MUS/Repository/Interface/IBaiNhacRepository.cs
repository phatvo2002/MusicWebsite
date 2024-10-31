using MUS.Entities.DTO;
using MUS.Model;

namespace MUS.Repository.Interface
{
    public interface IBaiNhacRepository
    {
         Task<ResultModel> AddBaiNhac(BaiNhacModel model);

         Task<List<BaiNhacDTO>> GetAllBaiNhac();

         Task<BaiNhacDTO> GetBaiNhacById(Guid id);

         Task<ResultModel> UpdateBaiNhac(UpdateBaiNhacModel model);

         Task<ResultModel> DeleteBaiNhac(Guid id);

         Task<ResultModel> UpdateView(Guid id);
    }
}
