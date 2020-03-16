using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TarjetasWeb.Core.Services.Interface;

namespace Trazabilidad.Core.Services.Repository
{
	public class ParametrosBancorRespository : IParametrosBancorRepository
	{
		_560_wsBancor_Parametros._560_wsBancor_Parametros ws { get; }
		public ParametrosBancorRespository()
		{
			var ws560Url = ConfigurationManager.AppSettings["URL_560_wsBancor_Parametros"];
			ws = new _560_wsBancor_Parametros._560_wsBancor_Parametros(ws560Url);
		}
		public string ObtenerSucursalDescripcion(int sucursalId)
		{
			var sucursal = ws.ObtenerUnaSucursal(sucursalId);
			return sucursal.SUCURSALES.NOMBRE_SUCURSAL;
		}
	}
}
