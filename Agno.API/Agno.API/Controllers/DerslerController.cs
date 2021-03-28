using Agno.API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agno.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DerslerController : ControllerBase
    {
        DonemDto donemDto;
        public DerslerController()
        {
            donemDto = new DonemDto();
        }



        [HttpGet]
        [Route("dersleriGetir")]
        public IActionResult DersleriGetir()
        {
            return Ok();
        }

        [HttpGet]
        [Route("donemleriGetir")]
        public IActionResult DonemleriGetir()
        {
            return Ok(donemDto.DonemDondur());
        }
    }
}
