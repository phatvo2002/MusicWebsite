using AutoMapper;
using MUS.Entities;
using MUS.Entities.DTO;

namespace MUS.Helper
{
    public class AutoMapper :Profile
    {
       public AutoMapper() {
            CreateMap<TheLoai, TheLoaiDTO>();
        }
    }
}
