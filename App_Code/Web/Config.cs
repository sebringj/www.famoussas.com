using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using config = System.Configuration.ConfigurationManager;

namespace Web
{
    public class Config
    {
        public class AppSettings
        {
            public class KitGUI
            {
                public static string AccountKey {get {return config.AppSettings["KitGUI.AccountKey"];}}
            }
        }
    }
}