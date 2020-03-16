using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trazabilidad.Core.Domain
{
    public class TipoSolicitudes
    {
        [Key]
        public decimal tsoId { get; set; }
        public string tsoDescripcion { get; set; }
        public bool? tsoActiva { get; set; }

    }
}
