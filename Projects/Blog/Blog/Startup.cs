using Blog.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Blog.Data.Repository;
using Microsoft.AspNetCore.Identity;
using Blog.Data.FileManager;

namespace Blog
{

    public class Startup                            
    {

        private IConfiguration _config { get; }
        public Startup(IConfiguration config)
        {
            _config = config;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //registers DB:
            services.AddDbContext<AppDbContext>(options =>
            options.UseSqlServer(_config.GetConnectionString("DefaultConnection")));

            //registers Identity-Roles
            services.AddIdentity<IdentityUser, IdentityRole>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 6;
            })
            //.AddRoles<IdentityRole>()
            .AddEntityFrameworkStores<AppDbContext>();

            //overrides redirect:
            services.ConfigureApplicationCookie
                (options =>
                {
                    options.LoginPath = "/Auth/Login";
                });

            //registers Repository
            services.AddTransient<IRepository, Repository>();
            //registers FileManager 
            services.AddTransient<IFileManager, FileManager>();



            services.AddMvc(options => options.EnableEndpointRouting = false);
        }




        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //enables showing static files (images) from wwwroot
            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvcWithDefaultRoute();

        }
    }
}
