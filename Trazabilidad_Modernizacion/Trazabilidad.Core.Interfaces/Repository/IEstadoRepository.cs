using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;

namespace Trazabilidad.Core.Interfaces.Repository
{
	public interface IEstadoRepository : IBaseRepository<Estados>
	{
		List<Estados> ObtenerEstadoRepository();
	}
}
