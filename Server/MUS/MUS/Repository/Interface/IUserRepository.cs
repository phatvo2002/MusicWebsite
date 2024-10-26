using MUS.Entities.DTO;
using MUS.Model;

namespace MUS.Repository.Interface
{
    public interface IUserRepository
    {
        Task<LoginDTO> Login(LoginModal modal);

        Task<ResultModel> Resgister(RegisterModal modal);
    }
}
