using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Blog.Data.FileManager
{
    public class FileManager : IFileManager
    {
        private string _imagePath;
        public FileManager(IConfiguration iconfiguration)
        {
            //path for images from "appsettings"
            _imagePath = iconfiguration["Path:Images"];
        }

        public FileStream ImageStream(string image)
        {
            return new FileStream(Path.Combine(_imagePath, image), FileMode.Open, FileAccess.Read);
        }

        //saves uploaded file to folder:
        public async Task<string> SaveImage(IFormFile image)
        {
            try
            {

                var save_path = Path.Combine(_imagePath);

                if (!Directory.Exists(save_path))
                {
                    Directory.CreateDirectory(save_path);
                }

                var mimeType = image.FileName.Substring(image.FileName.LastIndexOf(".")); //jpg, jpeg etc...
                var fileName = $"img_{DateTime.Now.ToString("dd-MM-yyyy-HH-mm-ss")}{mimeType}";

                //"using" - limits IDisposable object to scope of "using" expression
                using (var fileStram = new FileStream(Path.Combine(save_path, fileName), FileMode.Create))
                {
                    await image.CopyToAsync(fileStram);
                }

                return fileName;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return "Error";
            }
        }
    }
}
