using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TarjetasWeb.Core.Services.Interface
{
	public interface IParametrosBancorRepository
	{
		String ObtenerSucursalDescripcion(Int32 sucursalId);
	}
}
