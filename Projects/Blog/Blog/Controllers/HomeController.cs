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

        public IActionResult Index(string category) =>
            View(string.IsNullOrEmpty(category) ?
            _repo.GetAllPosts() :
            _repo.GetAllPosts(category));

        public IActionResult Post(int id) =>
            View(_repo.getPost(id));

        //image streaming:
        [HttpGet("/Image/{image}")]
        public IActionResult Image(string image) =>
            new FileStreamResult(
                _fileManager.ImageStream(image),
                $"image/{image.Substring(image.LastIndexOf(".") + 1)}");

        //jpg, jpeg etc:
        //var mimeType = image.Substring(image.LastIndexOf(".") + 1);                      



    }
}
