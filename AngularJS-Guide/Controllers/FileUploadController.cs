using AngularJS_Guide.Common;
using AngularJS_Guide.Models;
using OfficeOpenXml;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Runtime.Caching;
using System.Text;
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
                var stream = await file.ReadAsStreamAsync();

                IEnumerable<CustomerInfo> customerInfos = null;

                if (extension.Equals(".csv", System.StringComparison.OrdinalIgnoreCase))
                {
                    customerInfos = Csv.Read<CustomerInfo>(stream, Encoding.UTF8);
                }

                if (extension.Equals(".xlsx", System.StringComparison.OrdinalIgnoreCase))
                {
                    using (var package = new ExcelPackage(stream))
                    {
                        var bytes = package.ConvertToCsv();

                        customerInfos = Csv.Read<CustomerInfo>(bytes, Encoding.UTF8);
                    }
                }

                System.Threading.Thread.Sleep(2000);
                MemoryCache.Default.SetCustomerInfos(customerInfos);
            }
            return Ok();
        }
    }
}
