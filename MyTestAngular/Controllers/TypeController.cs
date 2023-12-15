using DataLibrary;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ModelLibrary;
using System.Security.Cryptography.X509Certificates;

namespace MyTestAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TypeController : ControllerBase
    {
        private readonly ILogger<ApplicationType> _logger;
        private readonly ApplicationDbContext _db;


        public TypeController(ILogger<ApplicationType> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        [HttpGet]
        public async Task<IEnumerable<ApplicationType>> Get()
        {
            return await _db.ApplicationTypes.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<ApplicationType>> Add(ApplicationType type)
        {
            if (type == null)
                return BadRequest();

            _db.ApplicationTypes.Add(type);
            await _db.SaveChangesAsync();
            return Ok(type);
        }

        [HttpPut]
        public async Task<ActionResult<ApplicationType>> Update(ApplicationType type) {

            if (type == null)
                return BadRequest();

            var objCat = _db.ApplicationTypes.Find(type.Id);

            if(objCat== null)
                return NotFound();

            objCat.Name = type.Name;
            await _db.SaveChangesAsync();

            return Ok(type);

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ApplicationType>> Delete([FromRoute]int id)
        {
            if(id==null)
                return BadRequest();
;
            var obj = _db.ApplicationTypes.Find(id);
            if (obj == null)
                return NotFound();
    

            _db.ApplicationTypes.Remove(obj);//Удаление в бд
            await _db.SaveChangesAsync();// Сохранение в бд - только после этого категория попадет в бд
            return Ok();

        }
    }
}
