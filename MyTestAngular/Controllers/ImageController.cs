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
    public class ImageController : ControllerBase
    {
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ImageController(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpPut]
        public ActionResult<Image> Add([FromForm] IFormFile file){

            if (file == null)
                return BadRequest();

            string webRootPath = _webHostEnvironment.WebRootPath;
            string upload = webRootPath + WebConstant.ImagePath;
            string fileName = Guid.NewGuid().ToString();
            string extension = Path.GetExtension(file.FileName);// расширение
            using (var fileStream = new FileStream(Path.Combine(upload, fileName + extension), FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Ok(new Image { name = fileName + extension});
        }


        //[HttpPut]
        //public async Task<ActionResult<Category>> Update(Category category)
        //{

        //    if (category == null)
        //        return BadRequest();
        //    var objCat = _db.Category.Find(category.Id);
        //    if (objCat == null)
        //        return NotFound();

        //    objCat.Name = category.Name;
        //    await _db.SaveChangesAsync();

        //    return Ok(objCat);
        //}



    }
}
