using MUS.Entities.DTO;
using MUS.Model;

namespace MUS.Services.Interface
{
    public interface IUserServices
    {
        Task<LoginDTO> Login(LoginModal modal);
        Task<ResultModel> Resgister(RegisterModal modal);
    }
}
