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
        public void Update(ApplicationType type) {

            if (type == null)
                return;

            var objCat = _db.Category.Find(type.Id);
            objCat.Name = type.Name;
            _db.SaveChanges();

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
