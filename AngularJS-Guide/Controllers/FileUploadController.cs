using CsvHelper;
using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace AngularJS_Guide.Controllers
{
    public class FileUploadController : ApiController
    {
        [HttpPost]
        public async Task<IHttpActionResult> Upload()
        {
            if (!this.Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var provider = new MultipartMemoryStreamProvider();
            await this.Request.Content.ReadAsMultipartAsync(provider);
            foreach (var file in provider.Contents)
            {
                var filename = file.Headers.ContentDisposition.FileName.Trim('\"');
                var extension = Path.GetExtension(filename);
                var buffer = await file.ReadAsByteArrayAsync();
                var stream = await file.ReadAsStreamAsync();

                using (var streamReader = new StreamReader(stream))
                {
                    var csvReader = new CsvReader(streamReader);
                    csvReader.getre
                }
                
                //Do whatever you want with filename and its binaray data.
            }
            return Ok();
        }
    }
}
