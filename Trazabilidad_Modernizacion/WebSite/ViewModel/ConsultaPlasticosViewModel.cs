using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite.ViewModel
{
	public class ConsultaPlasticosViewModel
	{
		public string sucursal_nro { get; set; }
		public MarcaViewModel marca { get; set; }
		public string producto { get; set; }
		public string gaf { get; set; }
		public string nro_cuenta { get; set; }
		public string plastico_nro{ get; set; }
		public string estado { get; set; }
		public string fecha_estado_desde { get; set; }
		public string fecha_estado_hasta { get; set; }
		public string nro_acuse { get; set; }
		public string origen_embozo { get; set; }
		public string motivo_impresion { get; set; }
		public string modalidad_entrega { get; set; }
		public string tipo_documento { get; set; }
		public string numero_documento { get; set; }
		public PaginacionViewModel paginacion { get; set; }
		

		public ConsultaPlasticosViewModel()
		{
			this.sucursal_nro = string.Empty;
			this.marca = new MarcaViewModel();
			this.producto = string.Empty;
			this.gaf = string.Empty;
			this.nro_cuenta = string.Empty;
			this.plastico_nro = string.Empty;
			this.estado = string.Empty;
			this.fecha_estado_desde = string.Empty;
			this.fecha_estado_hasta = string.Empty;
			this.nro_acuse = string.Empty;
			this.origen_embozo = string.Empty;
			this.motivo_impresion = string.Empty;
			this.modalidad_entrega = string.Empty;
			this.tipo_documento = string.Empty;
			this.numero_documento = string.Empty;
			this.paginacion = new PaginacionViewModel();
		}
	}


	public class PaginacionViewModel
	{
		public int cantidad_botones { get; set; }
		public int pagina_actual { get; set; }
		public int cantidad_solicitudes { get; set; }

		public int cantidad_maxima_solicitudes_por_pagina { get; set; }
		public int cantidad_maxima_botones { get; set; }

		public int registrosPorPagina { get; set; }

		public PaginacionViewModel()
		{
			this.cantidad_botones = 0;
			this.pagina_actual = 0;
			this.cantidad_solicitudes = 0;

			this.cantidad_maxima_solicitudes_por_pagina = 0;
			this.cantidad_maxima_botones = 0;
		}
	}
}
