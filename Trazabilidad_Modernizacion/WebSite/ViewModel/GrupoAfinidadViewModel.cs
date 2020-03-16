using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite.ViewModel
{
	public class GrupoAfinidadViewModel
	{
		public decimal id { get; set; }
		public decimal codigo { get; set; }
		public string  descripcion { get; set; }
		public decimal marcaProductoId { get; set; }
	}
}