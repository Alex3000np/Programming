
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//
using Microsoft.AspNetCore.Http;

namespace Blog.ViewModels
{
    public class PostViewModel
    {
        public int Id { get; set; }
        public String Title { get; set; } = "";
        public String Body { get; set; } = "";
        public String CurrentImage { get; set; } = "";


        // tags start
        public string Description { get; set; } = String.Empty;
        public string Tags { get; set; } = String.Empty;
        public string Category { get; set; } = String.Empty;
        // tags end


        //Interfase for any file (image, video etc.)
        public IFormFile Image { get; set; } = null;
    }
}
