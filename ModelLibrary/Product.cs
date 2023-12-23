using MyTestAngular;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.AspNetCore.Http;

namespace ModelLibrary
{
    public class Product
    {
        public Product()
        {
            TempCount = 1;
        }

        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string ShortDes { get; set; }

        public string Description { get; set; }

        [Range(1, int.MaxValue)]
        public double Price { get; set; }

        public string Image { get; set; }

        [Display(Name = "Category Type")]
        public int CategoryId { get; set; }

        [Display(Name = "Application Type")]
        public int ApplicationTypeId { get; set; }

        [NotMapped] // не добалвять в бд 
        [Range(1, 100, ErrorMessage = "Количество должно быть больше 0")]
        public int TempCount { get; set; }
        [NotMapped]
        public IFormFile imageFile { get; set; }
    }
}
