using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Trazabilidad.Core.Domain;
using Trazabilidad.Core.Interfaces;
using Trazabilidad.Core.Interfaces.Repository;
using WebSite.ViewModel;

namespace WebSite.Controllers
{
    public class DetallePlasticoController : Controller
    {
        // GET: DetallePlastico
        private IPlasticosRepository plasticosRepository { get; }
        private ISolicitudesRepository solicitudesRepository { get; }
        private ITipoSolicitudesRepository tipoSolicitudesRepository { get; }

        private IConversionRepository conversionRepository { get; }

        public DetallePlasticoController(IPlasticosRepository _plasticosRepository,
            ISolicitudesRepository _solicitudesRepository,
            ITipoSolicitudesRepository _tipoSolicitudesRepository,
             IConversionRepository _conversionRepository)
        {
            plasticosRepository = _plasticosRepository;
            solicitudesRepository = _solicitudesRepository;
            tipoSolicitudesRepository = _tipoSolicitudesRepository;
            conversionRepository = _conversionRepository;
        }

        public ActionResult Index()
        {
            return View();
        }
        public static string f1 = "";

        public JsonResult ObtenerDetallesplastico(string IdPlastico)
        {
            try
            {


                //IdPlastico = 102409331;
                //var resultadoSolicitud = new List<Solicitudes>();
                var resultadoPlastico = plasticosRepository.ObtenerPlastico(Convert.ToInt32(IdPlastico), "");


                decimal solicitud;
                if (resultadoPlastico.Nro_sol == null)
                    solicitud = 0;
                else
                    solicitud = (decimal)resultadoPlastico.Nro_sol;

                var plastico = new PlasticoViewModel();
                plastico.GAF = resultadoPlastico.GAF;

                if (resultadoPlastico.Fecha_Distrib== null)
                {
                    plastico.FechaDistrib = "sin datos";
                }
                else
                {
                    DevolverFormatoFecha((decimal)resultadoPlastico.Fecha_Distrib);
                    plastico.FechaDistrib = f1;
                }
            

                plastico.Suc_Radicacion = resultadoPlastico.Suc_Radicacion;

                if (resultadoPlastico.Fecha_Alta_Plastico == 0)
                {
                    plastico.FechaAltaPlastico = "sin datos";
                }
                else
                {
                    DevolverFormatoFecha(resultadoPlastico.Fecha_Alta_Plastico);
                    plastico.FechaAltaPlastico = f1;

                }

                plastico.Embozo_origen = resultadoPlastico.Embozo_origen;
                plastico.Nro_BP = resultadoPlastico.Nro_BP;

                plastico.Nro_sol = resultadoPlastico.Nro_sol;

                if (solicitud != 0)
                {
                    var resultadoSolicitud = solicitudesRepository.ObtenerSolicitud(solicitud);
                    var cartera = resultadoSolicitud.grupo_cartera_cod;
                    var resultadoCartera = conversionRepository.ObtenerConversionCartera((int)cartera);
                    var resultadoMercado = conversionRepository.ObtenerConversionMercado((int)resultadoSolicitud.mer_id);
                    decimal tsoId = (decimal)resultadoSolicitud.tsoId;
                    var resultadoTipoSolicitud = tipoSolicitudesRepository.ObtenerTipoSolicitudes(tsoId);
                    string fecha = resultadoSolicitud.solFecha.Value.ToString("dd/MM/yyyy");
                    plastico.SolicitudesViewModel.SolFecha = fecha;
                    plastico.SolicitudesViewModel.mer_id = resultadoSolicitud.mer_id;
                    plastico.SolicitudesViewModel.linea_cod = resultadoSolicitud.linea_cod;
                    plastico.SolicitudesViewModel.Mercado = resultadoMercado.concepto_descripcion;
                    plastico.SolicitudesViewModel.Cartera = resultadoCartera.concepto_descripcion;
                    plastico.TipoSolicitudesViewModel.tsoDescripcion = resultadoTipoSolicitud.tsoDescripcion;
                }



                return Json(plastico, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {

                throw;
            }



        }

        public string DevolverFormatoFecha(decimal Fecha)
        {

            string fecha1 = "";
            if (Fecha == null)
            {
                f1 = "sin datos";
                return f1;
            }
            else
                fecha1 = Convert.ToString(Fecha);

            var año = fecha1.Substring(0, 4);
            var mes = fecha1.Substring(4, 2);
            var dias = fecha1.Substring(6, 2);
            f1 = dias + "/" + mes + "/" + año;
            return f1;
        }
    }
}