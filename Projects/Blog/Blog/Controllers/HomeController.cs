using Blog.Data.FileManager;
using Blog.Data.Repository;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Blog.Controllers
{
    public class HomeController : Controller

    {
        private IRepository _repo;
        private IFileManager _fileManager;
        public HomeController(IRepository repo, IFileManager fileManager)
        {
            _repo = repo;
            _fileManager = fileManager;
        }


        public IActionResult Index(string category)
        {
            if (true)
            {

            }
            var posts = string.IsNullOrEmpty(category) ? _repo.GetAllPosts() : _repo.GetAllPosts(category);
            return View(posts);
        }

        public IActionResult Post(int id)
        {
            var post = _repo.getPost(id);
            return View(post);
        }

        //image streaming:
        [HttpGet("/Image/{image}")]
        public IActionResult Image(string image)
        {
            var mimeType = image.Substring(image.LastIndexOf(".") + 1); //jpg, jpeg etc...
            return new FileStreamResult(_fileManager.ImageStream(image), $"image/{mimeType}");
        }

    }
}
