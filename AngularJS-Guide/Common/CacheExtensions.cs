using AngularJS_Guide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;

namespace AngularJS_Guide.Common
{
    public static class CacheExtensions
    {
        private const string CUSTOMER_INFOS_CACHE_KEY = "customerInfos";

        public static void SetCustomerInfos(this ObjectCache cache, IEnumerable<CustomerInfo> customerInfos)
        {
            if (customerInfos == null)
            {
                throw new ArgumentNullException("customerInfos");
            }

            if (cache[CUSTOMER_INFOS_CACHE_KEY] != null)
            {
                cache.Remove(CUSTOMER_INFOS_CACHE_KEY);
            }
            cache.Set(CUSTOMER_INFOS_CACHE_KEY, customerInfos, new CacheItemPolicy() { AbsoluteExpiration = DateTimeOffset.UtcNow.AddMinutes(5) });
        }

        public static IEnumerable<CustomerInfo> GetCustomerInfos(this ObjectCache cache)
        {
            if (cache[CUSTOMER_INFOS_CACHE_KEY] != null)
            {
                return cache[CUSTOMER_INFOS_CACHE_KEY] as IEnumerable<CustomerInfo>;
            }
            return Enumerable.Empty<CustomerInfo>();
        }
    }
}