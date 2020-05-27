using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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


		[Key]
		public decimal estId { get; set; }
		public string estDes { get; set; }
		public Nullable<decimal> catID_est { get; set; }
		public Nullable<int> estHablitaRecepcionFisicoyPlastico { get; set; }

		public bool cxeDireccion { get; set; }
	}
}