using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;
using Trazabilidad.Core.Interfaces.Repository;

namespace Trazabilidad.Core.Repository
{
    public class Estados_SecuenciaRepository : BaseRepository<Estados_Secuencia>, IEstados_SecuenciaRepository
    {
        public Estados_SecuenciaRepository(ITarjetasWebContext context) : base(context)
        {
        }

        public List<Estados_Secuencia> TraerSecuencia(decimal Estadoid)
        {
            var respuesta = dbSet.Where(x => x.tipoSolicitud_id == 100 && x.cxeEstadoOrigen == Estadoid).ToList();

            return respuesta;
        }
    }
}
