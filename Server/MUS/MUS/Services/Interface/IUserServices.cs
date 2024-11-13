using MUS.Entities.DTO;
using MUS.Model;

namespace MUS.Services.Interface
{
    public interface IUserServices
    {
        Task<LoginDTO> Login(LoginModal modal);
        Task<ResultModel> Resgister(RegisterModal modal);
        Task<ResultModel> DeleteUser(Guid Id);

        Task<List<UserDTO>> GetAllUser();

        Task<ResultModel> ResetPassword(Guid id, string newPasword);
    }
}
