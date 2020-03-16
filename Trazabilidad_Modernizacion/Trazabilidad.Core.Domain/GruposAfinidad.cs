using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trazabilidad.Core.Domain
{
	public class GruposAfinidad
	{
		public decimal Id { get; set; }
		public decimal Codigo { get; set; }
		public string Descripcion { get; set; }
		public decimal MarcaProductoId { get; set; }
	}
}
