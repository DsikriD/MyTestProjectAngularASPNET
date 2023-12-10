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
        public async Task<IEnumerable<Category>> Get()
        {
            return await _db.Category.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Category>> Add(Category category)
        {
            if (category == null)
                return BadRequest();

            _db.Category.Add(category);
            await _db.SaveChangesAsync();
            return Ok(category);
        }

        [HttpPut]
        public async Task<ActionResult<Category>>  Update(Category category) {

            if (category == null)
                return BadRequest();
            var objCat = _db.Category.Find(category.Id);
            if (objCat == null)
                return NotFound();

            objCat.Name = category.Name;
            await _db.SaveChangesAsync();

            return Ok(objCat);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete([FromRoute]int id)
        {
            var obj = _db.Category.Find(id);
            if (obj == null)
            {
                return NotFound();
            }
            _db.Category.Remove(obj);//Удаление в бд
            await _db.SaveChangesAsync();// Сохранение в бд - только после этого категория попадет в бд
            return Ok(obj);

        }
    }
}
