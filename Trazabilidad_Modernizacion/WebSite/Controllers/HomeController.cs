using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Trazabilidad.Core.Interfaces.Repository;

namespace WebSite.Controllers
{
	public class HomeController : Controller
	{
        private IPlasticosRepository plasticosRepository { get; }

        public HomeController(IPlasticosRepository _plasticosRepository)
        {
            plasticosRepository = _plasticosRepository;
        }

        public ActionResult Index()
		{
            var asd = plasticosRepository.ObtenerPlastico(100019292, "");
			return View();
		}

		public ActionResult About()
		{
			ViewBag.Message = "Your application description page.";

			return View();
		}

		public ActionResult Contact()
		{

			ViewBag.Message = "Your contact page.";

			return View();
		}
	}
}