using MUS.Entities.DTO;
using MUS.Model;

namespace MUS.Services.Interface
{
    public interface ITheLoaiServices
    {
        public Task<List<TheLoaiDTO>> GetAllTheLoai();

        public Task<TheLoaiDTO> GetTheLoaiById(Guid id);
        public Task<ResultModel> AddTheLoai(TheLoaiModal modal);

        public Task<ResultModel> UpdateTheLoai(TheLoaiModal modal);

        public Task<ResultModel> DeleteTheLoai(Guid id);
    }
}
