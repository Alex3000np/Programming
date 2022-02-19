using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Models
{
    public class Post
    {
        public int Id { get; set; }
        public String Title { get; set; } = String.Empty;
        public String Body { get; set; } = String.Empty;
        public string Image { get; set; } = String.Empty;

        // tags 
        public string Description { get; set; } = String.Empty;
        public string Tags { get; set; } = String.Empty;
        public string Category { get; set; } = String.Empty;

        public DateTime Created { get; set; } = DateTime.Now;

    }
}
