using DataLibrary;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ModelLibrary;
using Utility;

namespace MyTestAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<Product> _logger;
        private readonly ApplicationDbContext _db;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ProductController(ApplicationDbContext db, ILogger<Product> logger, IWebHostEnvironment webHostEnvironment)
        {
            _db = db;
            _logger = logger;
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpGet]
        public async Task<IEnumerable<Product>> Get() {
            return await _db.Product.ToListAsync();
        }


        [HttpPost]
        public async Task<ActionResult<Product>> Add([FromBody] Product product)
        {
            Console.WriteLine(product.Id + product.Name + product.Image + product.Price);
            if (product == null)
                return BadRequest();

            var files = HttpContext.Request.Form.Files;
            string webRootPath = _webHostEnvironment.WebRootPath;

            string upload = webRootPath + WebConstant.ImagePath;
            string fileName = Guid.NewGuid().ToString();
            string extension = Path.GetExtension(files[0].FileName);// расширение

            return NotFound();
            using (var fileStream = new FileStream(Path.Combine(upload, fileName + extension), FileMode.Create))
            {
                files[0].CopyTo(fileStream);
            }

            product.Image = fileName + extension;

            _db.Product.Add(product);
            await _db.SaveChangesAsync();

            return Ok(product);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> Delete([FromRoute] int id)
        {
        
            if (id == null)
                return BadRequest();

            var product = _db.Product.FirstOrDefault(x => x.Id == id);
        
            if (product == null)
                return NotFound();

            _db.Product.Remove(product);
            await _db.SaveChangesAsync();

            return Ok(product);
        }

        [HttpPut]
        public async Task<ActionResult<Product>> Update(Product product)
        {
            if (product == null)
                return BadRequest();

            var obj = _db.Product.FirstOrDefault(x=>x.Id==product.Id);
           
            if (obj == null)
                return NotFound();

            _db.Product.Update(product);

            return Ok(product);
        }

    }
}
