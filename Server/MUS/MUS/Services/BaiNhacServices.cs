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
    }
}
