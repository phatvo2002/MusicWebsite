using AutoMapper;
using MUS.Entities;
using MUS.Entities.DTO;

namespace MUS.Helper
{
    public class AutoMapper :Profile
    {
       public AutoMapper() {
            CreateMap<TheLoai, TheLoaiDTO>();
            CreateMap<ChuDe, ChuDeDTO>();
            CreateMap<BaiNhac, BaiNhacDTO>();
            CreateMap<NhacSi, NhacSiDTO>();
            CreateMap<TamTrang, TamTrangDTO>();
        }
    }
    
}
