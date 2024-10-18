using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MUS.Model;
using MUS.Services;
using MUS.Services.Interface;

namespace MUS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaiNhacController : ControllerBase
    {
        public readonly IBaiNhacServices _baiNhacServices;
        public BaiNhacController(IBaiNhacServices baiNhacServices)
        {
            _baiNhacServices = baiNhacServices;
        }
        [HttpPost("addbainhac")]
        public async Task<IActionResult> AddChuDe([FromForm] BaiNhacModel modal)
        {
            try
            {
                ResultModel result = await _baiNhacServices.AddBaiNhac(modal);
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
