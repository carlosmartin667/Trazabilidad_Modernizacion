using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Trazabilidad.Core.Interfaces;
using Trazabilidad.Core.Interfaces.Repository;
using Trazabilidad.Core.Services.Repository;
using WebSite.ViewModel;

namespace WebSite.Controllers
{
	public class ParametrosController : Controller
	{

		private readonly IMarcaRepository marcaRepository;
		private readonly IEstadoRepository estadoRepository;
		private readonly IProductoTCRepository productoTCRepository;
		private readonly IGrupoAfinidadRepository gruposAfinidadRepository;
		private readonly IConversionRepository conversionRepository;
		private readonly IModalidadesEntregasRepository modalidadesEntregasRepository;
		public ParametrosController(IMarcaRepository _marcaRepository,
									IEstadoRepository _estadoRepository,
									IProductoTCRepository _productoTCRepository,
									IGrupoAfinidadRepository _gruposAfinidadRepository,
									IConversionRepository _conversionRepository,
									IModalidadesEntregasRepository _modalidadesEntregasRepository) : base()
		{
			marcaRepository = _marcaRepository;
			estadoRepository = _estadoRepository;
			productoTCRepository = _productoTCRepository;
			gruposAfinidadRepository = _gruposAfinidadRepository;
			conversionRepository = _conversionRepository;
			modalidadesEntregasRepository = _modalidadesEntregasRepository;
		}
		public JsonResult ObtenerMarcas()
		{

			var listMarcas = marcaRepository.Get().ToList();
			var modelMarcas = new List<MarcaViewModel>();

			listMarcas.ForEach(k =>
			{
				var marca = new MarcaViewModel()
				{
					id = k.Id.ToString(),
					nombreMarca = k.NombreMarca,
					codigoBanco = k.CodigoBco,
					codigoSOB = k.Codigo_SOB
				};
				modelMarcas.Add(marca);
			});

			return Json(modelMarcas, JsonRequestBehavior.AllowGet);
		}

		public JsonResult ObtenerEstados(decimal catID) {

			var listEstados = estadoRepository.Get().Where(x=>x.catID_est==catID).ToList();
			var modelEstado = new List<EstadoViewModel>();

			listEstados.ForEach(k =>
			{
				var estado = new EstadoViewModel()
				{
					id = k.estId,
					descripcion = k.estDes
				};
				modelEstado.Add(estado);
			});

			return Json(modelEstado, JsonRequestBehavior.AllowGet);
		}

		public JsonResult ObtenerProductos(int marcaID = 0)
		{
			var listProductos = productoTCRepository.Get().ToList();
			if (!marcaID.Equals(0))
				listProductos = listProductos.Where(k => k.MarcaProductoId.Equals(marcaID)).ToList();

			var modelProductos = new List<ProductoTCViewModel>();
			listProductos.ForEach(k =>
			{
				var producto = new ProductoTCViewModel()
				{
					id = k.Id.ToString(),
					nombreProducto = k.NombreProducto,
					codigoBco = k.CodigoBco,
					codigo_SOB = k.Codigo_SOB,
				};
				modelProductos.Add(producto);
			});

			return Json(modelProductos, JsonRequestBehavior.AllowGet);
		}
		public JsonResult ObtenerDescripcionSucursal(string sucursalID) {
			int intNumeroSucursal = 0;
			if (!int.TryParse(sucursalID, out intNumeroSucursal))
				return Json(new { sucursal_descripcion = "Valor ingresado no númerico." }, JsonRequestBehavior.AllowGet);

			SucursalViewModel sucursal = new SucursalViewModel();
			sucursal.sucursal_numero = sucursalID.ToString();
			ParametrosBancorRespository _560wsBancor = new ParametrosBancorRespository();
			sucursal.sucursal_descripcion = _560wsBancor.ObtenerSucursalDescripcion(intNumeroSucursal);

			return Json(sucursal, JsonRequestBehavior.AllowGet);

		}
		
		public JsonResult ObtenerGruposAfinidad(int marcaID = 0)
		{
			var listGAF = gruposAfinidadRepository.Get().ToList();
			if (!marcaID.Equals(0))
				listGAF =listGAF.Where(k => k.MarcaProductoId.Equals(marcaID)).ToList();

			var modelGAF = new List<GrupoAfinidadViewModel>();
			listGAF.ForEach(k =>
			{
				var producto = new GrupoAfinidadViewModel()
				{
					id = k.Id,
					codigo = k.Codigo,
					descripcion = k.Descripcion,
					marcaProductoId= k.MarcaProductoId,
				};
				modelGAF.Add(producto);
			});

			return Json(modelGAF, JsonRequestBehavior.AllowGet);
		}
		public JsonResult ObtenerConversionPorConcepto(string concepto)
		{
			var listConversion = conversionRepository.Get().Where(x => x.concepto_cod == concepto).ToList();
			
			var modelConversion = new List<ConversionViewModel>();
			listConversion.ForEach(k =>
			{
				var conversion = new ConversionViewModel()
				{
					concepto_cod = k.concepto_cod,
					codigo_origen = k.codigo_ORIGEN,
					codigo_destino = k.codigo_DESTINO,
					concepto_descripcion = k.concepto_descripcion
				};
				modelConversion.Add(conversion);
			});

			return Json(modelConversion, JsonRequestBehavior.AllowGet);
		}
		public JsonResult ObtenerModalidadesEntrega()
		{
			var listModalidadesEntregas = modalidadesEntregasRepository.Get().OrderBy(o => o.Nombre).ToList();
			var modelModalidadesEntregas = new List<ModalidadEntregaViewModel>();

			listModalidadesEntregas.ForEach(k =>
			{
				var modalidadEntrega = new ModalidadEntregaViewModel()
				{
					id = k.Id,
					codigo = k.Codigo,
					nombre = k.Nombre,
					descripcion = k.Descripcion

				};
				modelModalidadesEntregas.Add(modalidadEntrega);
			});

			return Json(modelModalidadesEntregas, JsonRequestBehavior.AllowGet);
		}

	}


}