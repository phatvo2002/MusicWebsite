﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MUS.Entities.DTO;
using MUS.Model;
using MUS.Services.Interface;

namespace MUS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public readonly IUserServices _userServices;
        public AuthController(IUserServices userServices)
        {
            _userServices = userServices;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModal modal)
        {
            try
            {
                LoginDTO result = await _userServices.Login(modal);
                return Ok(result);
            }catch(ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterModal modal)
        {
            try
            {
                ResultModel result = await _userServices.Resgister(modal);
                return Ok(result);
            }catch(ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}