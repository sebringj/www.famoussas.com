using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text.RegularExpressions;

namespace Web
{
    public class KitGUI
    {
        static Regex stripPattern;
        static KitGUI()
        {
            stripPattern = new Regex("[^a-zA-Z0-9\\-_]+",RegexOptions.Compiled | RegexOptions.IgnoreCase);
        }
        public static string PageID
        {
            get {
                var originalURL = HttpContext.Current.Request.ServerVariables["HTTP_X_ORIGINAL_URL"];
                if (originalURL == null)
                {
                    originalURL = HttpContext.Current.Request.Url.PathAndQuery;
                }
                return stripPattern.Replace(originalURL, "-");
            }
        }
    }
}