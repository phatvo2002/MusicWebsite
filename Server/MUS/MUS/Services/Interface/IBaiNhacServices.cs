using MUS.Model;

namespace MUS.Services.Interface
{
    public interface IBaiNhacServices
    {
        Task<ResultModel> AddBaiNhac(BaiNhacModel model);
    }
}
