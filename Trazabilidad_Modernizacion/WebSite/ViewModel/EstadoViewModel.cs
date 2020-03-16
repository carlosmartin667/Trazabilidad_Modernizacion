using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite.ViewModel
{
	public class EstadoViewModel
	{
		public decimal id { get; set; }
		public string descripcion { get; set; }

		public EstadoViewModel()
		{
			id = 0;
			descripcion = string.Empty;
		}
	}
}