using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite.ViewModel
{
    public class SolicitudesSeguimientoViewModel
    {
        public string  tarjeta { get; set; }
        public string estado { get; set; }
        public decimal sseID { get; set; }
        public decimal solId { get; set; }
        public decimal estId { get; set; }
        public decimal rchID { get; set; }
        public string sseFecha { get; set; }
        public string usr { get; set; }
        public string obs { get; set; }
        public Nullable<bool> sseDireccion { get; set; }
        public Nullable<int> justificacionDestruccionId { get; set; }
    }
}