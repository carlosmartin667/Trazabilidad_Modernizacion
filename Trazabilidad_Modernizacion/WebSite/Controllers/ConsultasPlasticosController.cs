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
    public class ConsultasPlasticosController : Controller
    {
        private IPlasticosRepository plasticosRepository { get; }
        private IConversionRepository conversionRepository { get; }
        private IEstadoRepository estadoRepository { get; }
        public ConsultasPlasticosController(
            IPlasticosRepository _plasticosRepository,
            IConversionRepository _conversionRepository,
            IEstadoRepository _estadoRepository)
        {
            plasticosRepository = _plasticosRepository;
            conversionRepository = _conversionRepository;
            estadoRepository = _estadoRepository;
        }

        public ActionResult Index()
        {
            return View();
        }
        public JsonResult ObtenerListaPlastico(int PaginaActual)
        {
            //int PaginaActual = 1;
            //var infoPaginacion = ObtenerInfoPaginacion();
            var resultado = plasticosRepository.Get().OrderBy(x => x.Reg_id)
                .Skip((PaginaActual - 1) * 10)
                .Take(10)
                .ToList();
            return Json(resultado, JsonRequestBehavior.AllowGet);
        }
        public JsonResult CombosPlasticoMarca()
        {
            var resultadoCombosPlasticoMarca = conversionRepository.ObtenerConversionMarcas();

            return Json(resultadoCombosPlasticoMarca, JsonRequestBehavior.AllowGet);
        }
        public JsonResult CombosPlasticoProducto()
        {
            var resultadoCombosPlasticoProducto = conversionRepository.ObtenerConversionProductos();

            return Json(resultadoCombosPlasticoProducto, JsonRequestBehavior.AllowGet);
        }
        public JsonResult CombosPlasticoEstados()
        {
            var resultadoCombosPlasticoEstados = estadoRepository.ObtenerEstadoRepository();


            return Json(resultadoCombosPlasticoEstados, JsonRequestBehavior.AllowGet);
        }
        public JsonResult FiltrosPlasticos(PlasticoViewModel PlasticoFiltros)
        {
            try
            {
                List<PlasticoViewModel> res = new List<PlasticoViewModel>();
                var resultado = plasticosRepository.Get();
                if (!String.IsNullOrEmpty(PlasticoFiltros.BarCode_Pieza))
                {
                    resultado = plasticosRepository.Get().Where(x => x.BarCode_Pieza == PlasticoFiltros.BarCode_Pieza).ToList();
                }
                if (PlasticoFiltros.Plastico_nro > 0)
                {
                    resultado = resultado.Where(x => x.Plastico_nro == PlasticoFiltros.Plastico_nro).ToList();
                }
                if (PlasticoFiltros.Nro_Cuenta_Plastico > 0)
                {
                    resultado = resultado.Where(x => x.Nro_Cuenta_Plastico == PlasticoFiltros.Nro_Cuenta_Plastico).ToList();
                }
                if (PlasticoFiltros.Nro_doc > 0)
                {
                    resultado = resultado.Where(x => x.Nro_doc == PlasticoFiltros.Nro_doc).ToList();
                }
                if (PlasticoFiltros.Estado_id > 0)
                {
                    resultado = resultado.Where(x => x.Estado_id == PlasticoFiltros.Estado_id).ToList();
                }
                if (PlasticoFiltros.Producto_id > 0)
                {
                    resultado = resultado.Where(x => x.Producto_id == PlasticoFiltros.Producto_id).ToList();
                }

                if (!String.IsNullOrEmpty(PlasticoFiltros.SubProducto_id))
                {
                    resultado = resultado.Where(x => x.SubProducto_id == PlasticoFiltros.SubProducto_id).ToList();
                }
                foreach (var item in resultado)
                {
                    PlasticoViewModel plastico = new PlasticoViewModel();
                    plastico.BarCode_Pieza = item.BarCode_Pieza;
                    plastico.Plastico_nro = item.Plastico_nro;
                    plastico.Suc_Destino = item.Suc_Destino;
                    plastico.Cliente_Razon = item.Cliente_Razon;
                    plastico.Nro_doc = item.Nro_doc;
                    plastico.Nro_Cuenta_Plastico = item.Nro_Cuenta_Plastico;
                    plastico.Producto_id = item.Producto_id;
                    plastico.Estado_Fecha = item.Estado_Fecha;
                    plastico.Estado_id = item.Estado_id;
                    plastico.Motivo_Impresion = item.Motivo_Impresion;
                    plastico.Mod_Entrega = item.Mod_Entrega;
                    plastico.Canal_origen = item.Canal_origen;
                    plastico.BarCode_Pieza = item.BarCode_Pieza;
                    res.Add(plastico);
                }
                return Json(res, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {

                throw;
            }


        }
        public JsonResult ObtenerInfoPaginacion()
        {
            InfoPaginacionViewModel resultadoPaginador = new InfoPaginacionViewModel();
            var cantidad = plasticosRepository.ObtenerTotalPlasticos();
            resultadoPaginador.PaginaActual = 1;
            resultadoPaginador.CantidadDeRegistros = cantidad;
            resultadoPaginador.CantidadDeBotones = (int)Math.Ceiling(cantidad / (double)10);

           
            return Json(resultadoPaginador, JsonRequestBehavior.AllowGet);
        }
    }
}