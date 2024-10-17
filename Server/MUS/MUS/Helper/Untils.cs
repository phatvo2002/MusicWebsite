using Microsoft.AspNetCore.Mvc.ModelBinding;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;

namespace MUS.Helper
{
    public static class Untils
    {
        private static string[] _permittedExtensions = { ".txt", ".zip", ".docx", ".doc", ".mp4", ".pdf" ,"mp3" };

        private static long _fileSizeLimit = 2097152000;

        public static byte[] ConvertFileToByteArray(string filePath)
        {
            // Check if the file exists
            if (File.Exists(filePath))
            {
                // Read all bytes from the file
                byte[] fileBytes = File.ReadAllBytes(filePath);
                return fileBytes;
            }
            else
            {
                throw new FileNotFoundException("File not found", filePath);
            }
        }

        public static string UploadFileImage(IFormFile file)
        {
            try
            {
                string folder = $"UploadFiles/Images/{DateTime.Now.ToString("yyyyMMdd")}/";
                // full path to file in temp location
                var filePath = Path.Combine(
                    Directory.GetCurrentDirectory(), "wwwroot",
                    folder);

                bool folderExists = Directory.Exists(filePath);
                if (!folderExists)
                    Directory.CreateDirectory(filePath);

                var url = "";

                var id = Guid.NewGuid();
                var fullpath = filePath + $"{id}_{file.FileName.Replace(" ", "")}";
                using (var image = Image.Load(file.OpenReadStream()))
                {
                    int width = image.Width;
                    if (image.Width > 800)
                    {
                        width = 800;
                    }
                    image.Mutate(x => x
                         .Resize(width, 0)
                     );

                    image.Save(fullpath);
                    url = url + folder + $"{id}_{file.FileName.Replace(" ", "")}";
                }
                return url;
            }
            catch (Exception exp)
            {
                string message = $"file / upload failed! + {exp.Message}";
                return "";
            }
        }

        public static async Task<string> UploadFile(IFormFile file, ModelStateDictionary ModelState)
        {
            try
            {
                string folder = $"UploadFiles/Files/{DateTime.Now.ToString("yyyyMMdd")}/";
                // full path to file in temp location
                var path = Path.Combine(
                    Directory.GetCurrentDirectory(), "wwwroot",
                    folder);

                bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);
                var uniqueFileName = Guid.NewGuid().ToString() + "_" + CharacterHelper.LocDau(file.FileName).Replace(" ", "");
                string filePath = Path.Combine(path, uniqueFileName);
                var url = string.Empty;
                var formFileContent =
               await FileHelpers.ProcessFormFile<IFormFile>(
                  file, ModelState!, _permittedExtensions,
                   _fileSizeLimit);

                if (file.Length > 0)
                {
                    using var fileStream = new FileStream(filePath, FileMode.Create);
                    await fileStream.WriteAsync(formFileContent);
                    url = $"{folder}/{uniqueFileName}";
                }
                return url;
            }
            catch (Exception exp)
            {
                string message = $"file / upload failed! + {exp.Message}";
                return "";
            }
        }

        public static string GetmimeType(string extension)
        {
            string mimeType = string.Empty;
            switch (extension)
            {
                case ".png":
                    mimeType = "image/png";
                    break;
                case ".jpg":
                    mimeType = "image/jpg";
                    break;
                case ".jfif":
                    mimeType = "image/jfif";
                    break;
                case ".jpeg":
                    mimeType = "image/jpeg";
                    break;
                case ".pdf":
                    mimeType = "application/pdf";
                    break;
                case ".xlsx":
                    mimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                    break;
                case ".xls":
                    mimeType = "application/vnd.ms-excel";
                    break;
                case ".docx":
                    mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                    break;
                case ".doc":
                    mimeType = "application/msword";
                    break;
                default:
                    // no support
                    break;
            }
            return mimeType;
        }

        public static bool DeleteFile(string fileName)
        {
            try
            {
                if (!string.IsNullOrEmpty(fileName))
                {
                    var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", fileName);

                    if (System.IO.File.Exists(filePath))
                        System.IO.File.Delete(filePath);
                    return true;
                }
                return false;
            }
            catch (Exception exp)
            {
                string message = $"file / upload failed! + {exp.Message}";
                return false;
            }

        }

    }
}
