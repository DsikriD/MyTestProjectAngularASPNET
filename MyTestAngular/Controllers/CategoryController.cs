using DataLibrary;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace MyTestAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly ILogger<Category> _logger;
        private readonly ApplicationDbContext _db;


        public CategoryController(ILogger<Category> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return _db.Category;
        }

        [HttpPost]
        public void Add(Category category)
        {
            if (category != null)
            {
                _db.Category.Add(category);
                _db.SaveChanges();
            }

        }

        [HttpPut]
        public void Update(Category category) {

            if (category == null)
                return;

            var objCat = _db.Category.Find(category.Id);
            objCat.Name = category.Name;
            _db.SaveChanges();

        }



        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute]int id)
        {
;
            var obj = _db.Category.Find(id);
            if (obj == null)
            {
                return NotFound();
            }
            _db.Category.Remove(obj);//Удаление в бд
            _db.SaveChanges();// Сохранение в бд - только после этого категория попадет в бд
            return Ok();

        }
    }
}
