using MUS.Entities.DTO;
using MUS.Model;

namespace MUS.Repository.Interface
{
    public interface IUserRepository
    {
        Task<LoginDTO> Login(LoginModal modal);

        Task<ResultModel> Resgister(RegisterModal modal);

        Task<ResultModel> DeleteUser(Guid Id);

        Task<List<UserDTO>> GetAllUser();

        Task<ResultModel> ResetPassword(Guid id,string oldPassword, string newPasword);
    }
}
