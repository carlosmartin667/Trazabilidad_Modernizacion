using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Trazabilidad.Core.Interfaces.Repository;

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


        public JsonResult EditarEstado(int num)
        {
            try
            {
                var res = 0;

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}