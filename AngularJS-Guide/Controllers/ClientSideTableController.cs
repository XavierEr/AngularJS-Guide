using AngularJS_Guide.Common;
using AngularJS_Guide.Models;
using FizzWare.NBuilder;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Web.Http;

namespace AngularJS_Guide.Controllers
{
    public class ClientSideTableController : ApiController
    {
        public IEnumerable<CustomerInfo> GetCustomerInfos()
        {
            var customerInfos = MemoryCache.Default.GetCustomerInfos();

            if (customerInfos.Any())
            {
                return customerInfos;
            }
            return Builder<CustomerInfo>.CreateListOfSize(100000).Build();
        }
    }
}
