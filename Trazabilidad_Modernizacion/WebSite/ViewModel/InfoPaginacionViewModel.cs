using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite.ViewModel
{
    public class InfoPaginacionViewModel
    {
        //paginador
        public int CantidadDeRegistros { get; set; }
        public int CantidadDeBotones { get; set; }
        public int PaginaActual { get; set; }
        public int RegistroPorPagina { get; set; }
    }
}