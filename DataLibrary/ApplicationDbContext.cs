using Microsoft.EntityFrameworkCore;
using ModelLibrary;
using MyTestAngular;

namespace DataLibrary
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options):base(options)
        {
            
        }

        public DbSet<Category> ?Category {get;set;}
        public DbSet<ApplicationType> ?ApplicationTypes { get;set;}

    }
}