using MUS.Entities.DTO;
using MUS.Model;

namespace MUS.Repository.Interface
{
    public interface IBaiNhacRepository
    {
        public Task<ResultModel> AddBaiNhac(BaiNhacModel model);

        public Task<List<BaiNhacDTO>> GetAllBaiNhac();

        public Task<BaiNhacDTO> GetBaiNhacById(Guid id);

        public Task<ResultModel> UpdateBaiNhac(BaiNhacModel model);

        public Task<ResultModel> DeleteBaiNhac(Guid id);
    }
}
