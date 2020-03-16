using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebSite.ModelBinder;
using WebSite.ViewModel;

namespace WebSite.Controllers
{
	public class ConsultasController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}

		public ActionResult ObtenerGrillaSolicitudesModel([ModelBinder(typeof(ConsultaPlasticosModelBinder))] ConsultaPlasticosViewModel CSM)
		{
			try
			{ 
				var datos = BuscarSolicitudes(CSM);
				return Json(datos, JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				throw;
			}
			finally
			{
			}

		}

		protected PlasticosGrillaViewModel BuscarSolicitudes(ConsultaPlasticosViewModel cSM)
		{
			throw new NotImplementedException();
		}
	}
}