using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using System.Threading.Tasks;
using PhotoSauce.MagicScaler;


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


        public bool RemoveImage(string image)
        {
            try
            {
                var file = Path.Combine(_imagePath, image);
                if (File.Exists(file))
                    File.Delete(file); return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }

        }


        //saves uploaded file to folder:

        //https://stackoverflow.com/questions/35027878/asp-net-core-image-upload-and-resize

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
                using (var fileStream = new FileStream(Path.Combine(save_path, fileName), FileMode.Create))
                {
                    await image.CopyToAsync(fileStream);
                    //MagicImageProcessor.ProcessImage(image.OpenReadStream(), fileStream, ImageOptions());
                }

              
                return fileName;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return "Error while saving image";
            }
        }

        ////image scaler settings
        //private ProcessImageSettings ImageOptions() => new ProcessImageSettings
        //{
        //    Width = 800,
        //    Height = 500,
        //    ResizeMode = CropScaleMode.Crop,
        //    SaveFormat = FileFormat.Jpeg,
        //    JpegQuality = 100,
        //    JpegSubsampleMode = ChromaSubsampleMode.Subsample420
        //};

    }
}
