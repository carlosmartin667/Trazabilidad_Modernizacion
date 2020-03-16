using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite.ViewModel
{
	public class ProductoTCViewModel
	{
		public string id { get; set; }
		public string nombreProducto { get; set; }
		public MarcaViewModel marca { get; set; }
		public string codigoBco { get; set; }
		public string codigo_SOB { get; set; }

		public ProductoTCViewModel()
		{
			marca = new MarcaViewModel();
			id = string.Empty;
			nombreProducto = string.Empty;
			codigoBco = string.Empty;
			codigo_SOB = string.Empty;
		}
	}
}