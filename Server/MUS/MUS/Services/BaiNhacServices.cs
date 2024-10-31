using MUS.Entities.DTO;
using MUS.Model;
using MUS.Repository.Interface;
using MUS.Services.Interface;

namespace MUS.Services
{
    public class BaiNhacServices : IBaiNhacServices
    {
        public readonly IBaiNhacRepository _baiNhacRepository;
        public BaiNhacServices(IBaiNhacRepository baiNhacRepository) {
            _baiNhacRepository = baiNhacRepository;
        }
        public async Task<ResultModel> AddBaiNhac(BaiNhacModel model)
        {
           return await _baiNhacRepository.AddBaiNhac(model);
        }

        public async Task<ResultModel> DeleteBaiNhac(Guid id)
        {
            return await _baiNhacRepository.DeleteBaiNhac(id);
        }

        public async Task<List<BaiNhacDTO>> GetAllBaiNhac()
        {
            return await _baiNhacRepository.GetAllBaiNhac();
        }

        public async Task<BaiNhacDTO> GetBaiNhacById(Guid id)
        {
            return await _baiNhacRepository.GetBaiNhacById(id);
        }

        public async Task<ResultModel> UpdateBaiNhac(UpdateBaiNhacModel model)
        {
            return await _baiNhacRepository.UpdateBaiNhac(model);
        }

        public async Task<ResultModel> UpdateView(Guid id)
        {
           return await _baiNhacRepository.UpdateView(id);  
        }
    }
}
