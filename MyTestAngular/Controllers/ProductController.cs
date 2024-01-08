using DataLibrary;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ModelLibrary;
using ModelLibrary.ViewModel;
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
        public async Task<ActionResult<Product>> Add([FromBody]Product product)
        {
            if (product == null)
                BadRequest();

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

            string webRootPath = _webHostEnvironment.WebRootPath;
            string Path = webRootPath + WebConstant.ImagePath;

            if (System.IO.File.Exists(Path + product?.Image))
                System.IO.File.Delete(Path + product?.Image);

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
