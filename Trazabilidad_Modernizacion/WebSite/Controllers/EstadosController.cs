using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Trazabilidad.Core.Interfaces.Repository;
using WebSite.ViewModel;

namespace WebSite.Controllers
{
    public class EstadosController : Controller
    {
        private IEstadoRepository estadoRepository { get; }

        public EstadosController(
            IEstadoRepository _estadoRepository
            )
        {
            estadoRepository = _estadoRepository;
        }

        public ActionResult Index()
        {
            return View();
        }


   
    }
}