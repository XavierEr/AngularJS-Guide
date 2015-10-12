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
    public class ServerSideTableController : ApiController
    {
        public IEnumerable<CustomerInfo> CustomerInfos { get; set; }

        public ServerSideTableController()
        {
            this.CustomerInfos = Builder<CustomerInfo>.CreateListOfSize(5000).Build();
        }

        public CustomerInfosViewModel GetCustomerInfos(int currentPage, int rowPerPage)
        {
            return new CustomerInfosViewModel(this.CustomerInfos.Skip((currentPage * rowPerPage) - rowPerPage).Take(rowPerPage), this.CustomerInfos.Count());
        }
    }
}
