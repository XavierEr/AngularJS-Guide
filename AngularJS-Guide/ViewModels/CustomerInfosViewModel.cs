using AngularJS_Guide.Models;
using System.Collections.Generic;
using System.Linq;

namespace AngularJS_Guide.ViewModels
{
    public class CustomerInfosViewModel
    {
        public IEnumerable<CustomerInfo> CustomerInfos { get; set; }

        public int TotalRecords { get; set; }

        public CustomerInfosViewModel(IEnumerable<CustomerInfo> customerinfos)
            : this(customerinfos, customerinfos.Count())
        {
        }

        public CustomerInfosViewModel(IEnumerable<CustomerInfo> customerInfos, int totalRecords)
        {
            this.CustomerInfos = customerInfos;
            this.TotalRecords = totalRecords;
        }
    }
}