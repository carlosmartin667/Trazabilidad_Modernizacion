using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trazabilidad.Core.Domain
{
	public class ModalidadesEntregas
	{
		[Key]
		public decimal Id { get; set; }
		public string Codigo { get; set; }
		public string Nombre { get; set; }
		public string Descripcion { get; set; }
	}
}
