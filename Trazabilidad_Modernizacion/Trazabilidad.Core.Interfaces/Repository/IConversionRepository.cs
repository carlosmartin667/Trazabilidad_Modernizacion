using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;
using Trazabilidad.Core.Interfaces.Repository;

namespace Trazabilidad.Core.Interfaces
{
	public interface IConversionRepository : IBaseRepository<Conversiones>
	{

		Conversiones ObtenerConversionMercado(Int32 mer_id);
		Conversiones ObtenerConversionCartera(Int32 grupo_cartera_cod);

		List<Conversiones> ObtenerConversionMarcas();
		List<Conversiones> ObtenerConversionProductos(string codigo_ORIGEN);

	}
}
