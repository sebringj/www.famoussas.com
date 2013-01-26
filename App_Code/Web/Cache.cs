using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Caching;

namespace Web
{
    public class Cache
    {
        public static void Set(string key, object item, int minutes)
        {
            HttpContext c = HttpContext.Current;
            c.Cache.Add(key, item, null, DateTime.Now.AddMinutes(minutes), 
                System.Web.Caching.Cache.NoSlidingExpiration,
                CacheItemPriority.Default, null);
        }
    }
}