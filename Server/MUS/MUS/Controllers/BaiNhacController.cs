using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MUS.Entities.DTO;
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

        [HttpGet("getallbainhac")]
        public async Task<IActionResult> GetAllBaiNhac()
        {
            try
            {
                List<BaiNhacDTO> result = await _baiNhacServices.GetAllBaiNhac();
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getbainhacbyid")]
        public async Task<IActionResult> GetBaiNhacById(Guid Id)
        {
            try
            {
                BaiNhacDTO result = await _baiNhacServices.GetBaiNhacById(Id);
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
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


        [HttpPut("updatebainhac")]
        public async Task<IActionResult> UpdateBaiNhac([FromForm]  UpdateBaiNhacModel modal)
        {
            try
            {
                ResultModel result = await _baiNhacServices.UpdateBaiNhac(modal);
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("updateview")]
        public async Task<IActionResult> UpdateView(Guid id)
        {
            try
            {
                ResultModel result = await _baiNhacServices.UpdateView(id);
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("deletebainhac")]
        public async Task<IActionResult> Deletebainhac(Guid id)
        {
            try
            {
                ResultModel result = await _baiNhacServices.DeleteBaiNhac(id);
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
