using AngularJS_Guide.Models;
using AngularJS_Guide.ViewModels;
using FizzWare.NBuilder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularJS_Guide.Controllers
{
    public class ClientSideTableController : ApiController
    {
        public IEnumerable<CustomerInfo> GetCustomerInfos()
        {
            return Builder<CustomerInfo>.CreateListOfSize(10000).Build();
        }
    }
}
