using MUS.Entities.DTO;
using MUS.Model;
using MUS.Repository.Interface;
using MUS.Services.Interface;

namespace MUS.Services
{
    public class AlbumServices : IAlbumServices
    {
        public readonly IAlbumRepository _albumRepository;

        public AlbumServices(IAlbumRepository albumRepository)
        {
            _albumRepository = albumRepository;
        }

        public async  Task<ResultModel> AddAlbum(AlbumModal model)
        {
            return await _albumRepository.AddAlbum(model);
        }

        public async Task<ResultModel> DeleteAlbum(Guid id)
        {
            return await _albumRepository.DeleteAlbum(id);  
        }

        public async Task<AlbumDTO> GetAlbumById(Guid id)
        {
            return await _albumRepository.GetAlbumById(id);
        }

        public async Task<List<AlbumDTO>> GetAllAlbum()
        {
           return await _albumRepository.GetAllAlbum(); 
        }

        public async Task<ResultModel> UpdateAlbum(AlbumModal model)
        {
            return await UpdateAlbum(model);
        }
    }
}
