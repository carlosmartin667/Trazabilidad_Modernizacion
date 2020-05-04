using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;
using Trazabilidad.Core.Interfaces.Repository;

namespace Trazabilidad.Core.Repository
{
    public class EstadoRepository : BaseRepository<Estados>, IEstadoRepository
    {
        public EstadoRepository(ITarjetasWebContext context) : base(context)
        { 
        
        }

        public Estados ObtenerEstado(decimal estId)
        {
            var respuesta = dbSet.Where(x => x.estId == estId).FirstOrDefault();



            return respuesta;
        }

        public List<Estados> ObtenerEstadoRepository()
        {
            var Estados = dbSet.Where(x => x.catID_est == 6).ToList();
            return Estados;
        }
    }
}
