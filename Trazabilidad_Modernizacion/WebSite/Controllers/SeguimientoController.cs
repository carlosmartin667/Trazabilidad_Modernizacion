using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Trazabilidad.Core.Interfaces.Repository;
using WebSite.ViewModel;

namespace WebSite.Controllers
{
    public class SeguimientoController : Controller
    {
        private ISolicitudesSeguimientoRepository solicitudesSeguimientoRepository { get; }
        private IEstadoRepository estadoRepository { get; }
        private IPlasticosRepository plasticosRepository { get; }

        public SeguimientoController(
            ISolicitudesSeguimientoRepository _solicitudesSeguimientoRepository,
            IEstadoRepository _estadoRepository,
             IPlasticosRepository _plasticosRepository)
        {
            solicitudesSeguimientoRepository = _solicitudesSeguimientoRepository;
            estadoRepository = _estadoRepository;
            plasticosRepository = _plasticosRepository;
        }

        public ActionResult Index()
        {
            return View();
        }


        public JsonResult ObtenerSeguimiento(string solId)

        {
            try

            {

                List<SolicitudesSeguimientoViewModel> res = new List<SolicitudesSeguimientoViewModel>();
                var resultadoSeguimiento = solicitudesSeguimientoRepository.ObtenerSeguimiento(Convert.ToInt32(solId));
                foreach (var item in resultadoSeguimiento)
                {
                    SolicitudesSeguimientoViewModel SeguimientoViewModel = new SolicitudesSeguimientoViewModel();
                    SeguimientoViewModel.sseFecha = item.sseFecha.ToString("dd/MM/yyyy");


                    SeguimientoViewModel.estId = item.estId;
                    var estado = estadoRepository.ObtenerEstado(SeguimientoViewModel.estId);
                    SeguimientoViewModel.estado = estado.estDes;
                    SeguimientoViewModel.usr = item.usr;
                    SeguimientoViewModel.obs = item.obs;
                    res.Add(SeguimientoViewModel);
                }
                // var resultadoSeguimiento = solId;

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }

        }

        public JsonResult ObtenerNroTarjeta(string solId)
        {

            var tarjetanumero = plasticosRepository.ObtenerPlastico(Convert.ToInt32(solId), "");
            //var respuestaNrotarjeta = DevolverFormatoNrotarjeta(tarjetanumero.Plastico_nro);

            string tarjeta = "";

            tarjeta = Convert.ToString(tarjetanumero.Plastico_nro);

            var noMostrar = "XXXXXXXXXXXX";
            var ulimosNumeros = tarjeta.Substring(11, 4);

            tarjeta = noMostrar + ulimosNumeros;




            return Json(tarjeta, JsonRequestBehavior.AllowGet);
        }
        public JsonResult DevolverFormatoNrotarjeta(decimal tarjetanumero)
        {
            string numero = "";
            //SolicitudesSeguimientoViewModel SeguimientoViewModel = new SolicitudesSeguimientoViewModel();
            string tarjeta = "";

            tarjeta = Convert.ToString(tarjetanumero);

            var noMostrar = "XXXXXXXXXXXX";
            var ulimosNumeros = tarjeta.Substring(11, 4);

            tarjeta = noMostrar + ulimosNumeros;

            //SeguimientoViewModel.tarjeta = numero;
            return Json(tarjeta, JsonRequestBehavior.AllowGet);
        }

    }
}