using MUS.Entities.DTO;
using MUS.Model;
using MUS.Repository.Interface;
using MUS.Services.Interface;

namespace MUS.Services
{
    public class UserServices : IUserServices
    {
        public readonly IUserRepository _userRepository;

        public UserServices(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<LoginDTO> Login(LoginModal modal)
        {
            return await _userRepository.Login(modal);
        }

        public async Task<ResultModel> Resgister(RegisterModal modal)
        {
            return await _userRepository.Resgister(modal);
        }
    }
}
