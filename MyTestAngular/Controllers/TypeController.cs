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
        public IEnumerable<ApplicationType> Get()
        {
            return _db.ApplicationTypes;
        }

        [HttpPost]
        public void Add(ApplicationType type)
        {
            if (type != null)
            {
                _db.ApplicationTypes.Add(type);
                _db.SaveChanges();
            }

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
        public ActionResult Delete([FromRoute]int id)
        {
;
            var obj = _db.ApplicationTypes.Find(id);
            if (obj == null)
            {
                return NotFound();
            }
            _db.ApplicationTypes.Remove(obj);//Удаление в бд
            _db.SaveChanges();// Сохранение в бд - только после этого категория попадет в бд
            return Ok();

        }
    }
}
