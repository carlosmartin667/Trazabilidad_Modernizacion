using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;

namespace Trazabilidad.Core.Interfaces.Repository
{
    public interface IPlasticosRepository : IBaseRepository<Plasticos>
    {
        /// <summary>
        /// Devuelve una lista de Plasticos segun el Grupo de Parametro a filtrar. si no encuentra resultados arroja un ApplicationException.
        /// </summary>
        /// <param name="IdPlastico"></param>
        /// <param name="IncludeProperties"></param>
        /// <returns></returns>
        Plasticos ObtenerPlastico(Int32 IdPlastico, string IncludeProperties);
        int ObtenerTotalPlasticos();

        List<Plasticos> Paginador(int PaginaActual);
    }
}
