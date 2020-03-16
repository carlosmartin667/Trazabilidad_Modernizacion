using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebSite
{
	public class NeedsAuthorization : Attribute
	{

		public string ActionValidate { get; set; }

		public NeedsAuthorization()
		{

		}

		public NeedsAuthorization(string _actionValidate)
		{
			this.ActionValidate = _actionValidate;
		}



	}
}