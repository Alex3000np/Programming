using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Blog.Data.Repository;
using Blog.Models;
using Blog.ViewModels;
using Blog.Data.FileManager;

namespace Blog.Controllers
{
    [Authorize(Roles = "Admin")]

    public class PanelController : Controller
    {
        IRepository _repo;
        IFileManager _fileManager;
        public PanelController(IRepository repo, IFileManager fileManager)
        {
            _repo = repo;
            _fileManager = fileManager;
        }


        public IActionResult Index()
        {
            var posts = _repo.GetAllPosts();
            return View(posts);
        }


        [HttpGet]
        public IActionResult Edit(int? id)
        {
            if (id == null)
            {
                return View(new PostViewModel());
            }
            else
            {
                var post = _repo.getPost((int)id);
                return View(new PostViewModel
                {
                    Id = post.Id,
                    Title = post.Title,
                    Body = post.Body,
                    CurrentImage = post.Image,

                    Description = post.Description,
                    Category = post.Category,
                    Tags = post.Tags,

                });
            }
        }


        [HttpPost]
        public async Task<IActionResult> Edit(PostViewModel postViewModel)
        {
            var post = new Post
            {
                Id = postViewModel.Id,
                Title = postViewModel.Title,
                Body = postViewModel.Body,
                Description = postViewModel.Description,
                Category = postViewModel.Category,
                Tags = postViewModel.Tags,

            };



            if (postViewModel.Image == null)
                post.Image = postViewModel.CurrentImage;
            else
            {
                if (!string.IsNullOrEmpty(postViewModel.CurrentImage))
                    _fileManager.RemoveImage(postViewModel.CurrentImage);

                post.Image = await _fileManager.SaveImage(postViewModel.Image);
            }




            if (post.Id > 0) _repo.UpdatePost(post);

            else _repo.AddPost(post);

            if (await _repo.SavechangesAsync())
                return RedirectToAction("Index");
            else return View(post);
        }


        [HttpGet]
        public async Task<IActionResult> Remove(int id)
        {
            _repo.RemovePost(id);
            await _repo.SavechangesAsync();
            return RedirectToAction("Index");
        }
    }
}
