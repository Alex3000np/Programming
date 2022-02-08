using Blog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Data.Repository
{
    public class Repository : IRepository
    {
        //DB injection:
        private readonly AppDbContext _appDbContext;
        public Repository(AppDbContext appDbContext) { _appDbContext = appDbContext; }



        public Post getPost(int id)
        {
            return _appDbContext.Post.FirstOrDefault(post => post.Id == id);
        }
        public List<Post> GetAllPosts()
        {
            return _appDbContext.Post.ToList();
        }

        public List<Post> GetAllPosts(string category)
        {
            return _appDbContext.Post.Where(pst => pst.Category.ToLower().Equals(category.ToLower())).ToList();
        }

        public void AddPost(Post post)
        {
            _appDbContext.Post.Add(post);

        }
        public void UpdatePost(Post post)
        {
            _appDbContext.Post.Update(post);        //need to clarify "update" method

        }
        public void RemovePost(int id)
        {
            _appDbContext.Post.Remove(getPost(id));
        }

        public async Task<bool> SavechangesAsync()
        {
            if (await _appDbContext.SaveChangesAsync() > 0)
            {
                return true;
            }
            return false;
        }
    }
}
