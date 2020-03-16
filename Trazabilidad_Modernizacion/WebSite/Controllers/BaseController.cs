using __560_wsBancor_Seguridad;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.ServiceModel;
using System.ServiceModel.Channels;
using System.Text;
using System.Web;
using System.Web.Mvc;
using TarjetasWeb.Core.Interfaces;
using TarjetasWeb.Infrastructure.Tools;
using TarjetasWeb.Infrastructure.Tools.Logger;
using WebSite.ViewModel;
using wsBancorSeguridad = __560_wsBancor_Seguridad;
using System.Threading.Tasks;
using TarjetasWeb.Infrastructure.Tools.Exceptions;

namespace WebSite.Controllers
{
	public class BaseController : Controller
	{
		protected const string NOMBRE_SESSION_OFERTA_PRODUCTO = "OfertaDeProducto";
		protected const string CAMPO_VACIO = "-";
		protected IConfiguracionRepository configuracionRepository;
		protected readonly IMensajeRepository mensajeRepository;
		protected ILoggerService loggerService;

		#region Constantes
		public const string URL_TARJETAS_CREDITO_WEB = "URL_TARJETAS_CREDITO_WEB";
		public const string URL_INDIVIDUOS_WEB = "URL_INDIVIDUOS_WEB";

		public const string URL_629_ESB_ObtenerDatosSocio = "URL_629_STD_ObtenerDatosSocios";
		public const string StrCredencialWS_629_ESB_Usuario = "StrCredencialWS_629_ESB_Usuario";
		public const string StrCredencialWS_629_ESB_Clave = "StrCredencialWS_629_ESB_Clave";

		#endregion

		public BaseController(IConfiguracionRepository _configuracionRepository,
							  IMensajeRepository _mensajeRepository,
							  ILoggerService _loggerService)
		{

			configuracionRepository = _configuracionRepository;
			mensajeRepository = _mensajeRepository;
			loggerService = _loggerService;

			try
			{

				ViewData.Add("URL_TARJETAS_CREDITO_WEB", configuracionRepository.ObtenerConfiguracionPorClave(URL_TARJETAS_CREDITO_WEB).Valor);
				ViewData.Add("URL_INDIVIDUOS_WEB", GetBaseUrl());

				System.Reflection.Assembly assembly = System.Reflection.Assembly.GetExecutingAssembly();
				FileVersionInfo fvi = FileVersionInfo.GetVersionInfo(assembly.Location);
				ViewData.Add("VERSION", fvi.ProductVersion);

				var url560wsBancor = configuracionRepository.ObtenerValorPorClave("URL_560_wsBancor_Seguridad");

				var wsBancorSeg = new wsBancorSeguridad._560_wsBancor_Seguridad(url560wsBancor, Int32.MaxValue);
				var CanalId = 0;
				var CanalCodigo = 0;


				if (System.Web.HttpContext.Current.Session["CanalId"] == null && System.Web.HttpContext.Current.Session["CanalCodigo"] == null)
				{
					wsBancorSeg.TipoDeUsuarioAvanzado(SisId, UserId, ref CanalId, ref CanalCodigo);
					System.Web.HttpContext.Current.Session["CanalId"] = CanalId.ToString();
					System.Web.HttpContext.Current.Session["CanalCodigo"] = CanalCodigo.ToString();

				}

				if (System.Web.HttpContext.Current.Session["Usuario"] == null)
				{
					var Usuario = wsBancorSeg.LeeUsuario_ByID(UserId);
					System.Web.HttpContext.Current.Session["Usuario"] = Usuario;
				}
			}
			catch (Exception ex)
			{
				loggerService.ErrorLog(ex);
			}


		}

		public String CanalId
		{
			get
			{
				return System.Web.HttpContext.Current.Session["CanalId"].ToString();
			}
		}

		public String CanalCodigo
		{
			get
			{
				return System.Web.HttpContext.Current.Session["CanalCodigo"].ToString();
			}

		}
		
		public String Sucursal
		{
			get
			{
				return ((LeeUsuario_ByID_OUT)(System.Web.HttpContext.Current.Session["Usuario"])).User.GrpOrigen;
			}
		}

		public String NombreApellidoUsuario
		{
			get
			{
				return ((LeeUsuario_ByID_OUT)(System.Web.HttpContext.Current.Session["Usuario"])).User.NombreApellido;
			}
		}

		public Int32 SisId
		{
			get
			{
				if (System.Web.HttpContext.Current.Session["SisId"] == null)
					return configuracionRepository.ObtenerValorPorClave<Int32>("SistemaId");
				else
					return Convert.ToInt32(System.Web.HttpContext.Current.Session["SisId"].ToString());
			}
		}

		public String UserId
		{
			get
			{
				try
				{
					if (System.Configuration.ConfigurationManager.AppSettings["Entorno"] == null
						|| System.Configuration.ConfigurationManager.AppSettings["Entorno"].ToUpper() == "DEV")
						return "e34656316";

					if (System.Web.HttpContext.Current.Session["UserId"] == null)


						System.Web.HttpContext.Current.Session["UserId"] = ToolsCls.Estandarizador_Usr(System.Web.HttpContext.Current.User.Identity.Name);
					return System.Web.HttpContext.Current.Session["UserId"].ToString();
				}
				catch (Exception ex)
				{
					loggerService.ErrorLog(ex);
					throw;
				}

			}
		}


		public ActionResult ObtenerLayoutModel()
		{
			var model = new LayoutViewModel()
			{
				CanalDeVenta = CanalCodigo,
				Usuario = UserId,
				Sucursal = Sucursal,
				UsuarioNombre = NombreApellidoUsuario
			};

			return Json(model, JsonRequestBehavior.AllowGet);
		}

		protected string GetBaseUrl()
		{
			var request = System.Web.HttpContext.Current.Request;
			var appUrl = HttpRuntime.AppDomainAppVirtualPath;

			if (appUrl != "/")
				appUrl = "/" + appUrl;

			var baseUrl = string.Format("{0}://{1}{2}", request.Url.Scheme, request.Url.Authority, appUrl);

			return baseUrl;
		}

		protected override void OnActionExecuting(ActionExecutingContext filterContext)
		{

			LimpiarCarpetaFiles();
			if (!filterContext.ActionDescriptor.GetCustomAttributes(false).Any(x => x is NeedsAuthorization))
				return;

			var authAttribute = (NeedsAuthorization)filterContext.ActionDescriptor.GetCustomAttributes(false).First(x => x is NeedsAuthorization);

			var windowsUser = UserId;

			if (UserId.IndexOf('\\') >= 0)
				windowsUser = UserId.Split('\\')[1];

			var wsSeguridad = new __560_wsBancor_Seguridad._560_wsBancor_Seguridad(configuracionRepository.ObtenerValorPorClave("URL_560_wsBancor_Seguridad"));
			var sistemaId = configuracionRepository.ObtenerValorPorClave<Int32>("SistemaId");
			var _menuList = wsSeguridad.MenuPorSistemaPorUsuario(sistemaId, windowsUser, "0", 0).NodosMenu.ToList();

			var _controllerName = filterContext.RouteData.Values["controller"];
			var _actionName = filterContext.RouteData.Values["action"];

			if (!String.IsNullOrEmpty(authAttribute.ActionValidate))
				_actionName = authAttribute.ActionValidate;

			var Url = new UrlHelper(filterContext.RequestContext);

			if (!CanAccess(_actionName.ToString(), _controllerName.ToString(), _menuList))
			{
				loggerService.Trace($"El usuario {UserId} no puede acceder al sitio Controller {_controllerName.ToString()} Action {_actionName.ToString()}");
				filterContext.Result = new RedirectResult(Url.Action("AccesoDenegado", "Base"));
			}

			base.OnActionExecuting(filterContext);

		}
		private bool CanAccess(string action, string controller, List<_560_wsBancor_Seguridad.Model.NodosMenu> menuOptions)
		{
			var key = string.Format("{0}/{1}", controller.ToUpper(), action.ToUpper());

			return menuOptions.Any(x => x.NodoCall.ToUpper().Contains(key))
				|| menuOptions.Any(x => x.NodoParam.ToUpper().Trim().Contains($"CONTROLLER={controller.ToUpper()}&ACTION={action.ToUpper()}"));
		}

		public ActionResult AccesoDenegado()
		{
			return View("Error", new EstadoResponseViewModel(mensajeRepository.ObtenerMensajeValor("BaseController", "ERROR_AUTORIZACION")));
		}

		protected virtual string ObtenerMensaje(string clave)
		{
			return mensajeRepository.ObtenerMensajeValor(MethodBase.GetCurrentMethod().ReflectedType.Name, clave);
		}

		protected virtual string ObtenerMensaje(string controller, string clave)
		{
			return mensajeRepository.ObtenerMensajeValor(controller, clave);
		}

		protected virtual KeyValuePair<String, String> ObtenerCodigoMensaje(string controller, string clave)
		{
			return mensajeRepository.ObtenerMensajeCodigoValor(controller, clave);
		}

		protected void LimpiarCarpetaFiles()
		{

			Task.Factory.StartNew(() => {
				var path = configuracionRepository.ObtenerConfiguracionPorClave("PathDocumentoDeImpresion").Valor;
				var dirInfo = new System.IO.DirectoryInfo(path);
				var files = dirInfo.GetFiles().Where(x => x.CreationTime < DateTime.Today);
				files.ToList().ForEach(x => System.IO.File.Delete(x.FullName));
			});

		}

	

	}

	public static class ExtentionMethods
	{
		public static string GetValue(this Dictionary<string, string> dic, string key)
		{
			if (dic.ContainsKey(key))
				return dic[key];
			return string.Empty;
		}

	}
}