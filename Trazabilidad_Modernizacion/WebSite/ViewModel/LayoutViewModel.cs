using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite.ViewModel
{
	public class LayoutViewModel : EstadoResponseViewModel
	{

		public String Usuario { get; set; }

		public String Sucursal { get; set; }

		public String CanalDeVenta { get; set; }

		public String UsuarioNombre { get; set; }
	}
}