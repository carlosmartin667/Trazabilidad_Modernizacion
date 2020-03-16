using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite.ViewModel
{
	public class MarcaViewModel : EstadoResponseViewModel
	{
		public string id { get; set; }
		public string nombreMarca { get; set; }
		public string codigoBanco { get; set; }
		public string codigoSOB { get; set; }

		public MarcaViewModel()
		{
			id = string.Empty;
			nombreMarca = string.Empty;
			codigoBanco = string.Empty;
			codigoSOB = string.Empty;
		}
	}
}