using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLibrary.ViewModel
{
    public class ProductVM
    {
       public Product product { get; set; }
       public IFormFile imageFile { get; set; }
    }
}
