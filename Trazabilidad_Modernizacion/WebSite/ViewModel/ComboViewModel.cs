using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Trazabilidad.Core.Domain;

namespace WebSite.ViewModel
{
    public class ComboViewModel
    {

        public List<Conversiones> productoConversion { get; set; }
        public List<Conversiones> marcaConversion { get; set; }
        public List<Estados> marcaEstados { get; set; }
       
    }
}