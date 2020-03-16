using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;
using Trazabilidad.Core.Interfaces.Repository;

namespace Trazabilidad.Core.Repository
{
    public class SolicitudesRepository : BaseRepository<Solicitudes>, ISolicitudesRepository
    {
        public SolicitudesRepository(ITarjetasWebContext context) : base(context)
        {
        }

        public Solicitudes ObtenerSolicitud(decimal solId)
        {
            if (solId == 0)
                throw new ArgumentException("Se debe proporcionar un Id de Solicitudes");

           var  solicitud = dbSet.FirstOrDefault(x => x.solId == solId);

            //Solicitudes solicitud = Get().FirstOrDefault(x => x.solId == solId);

            if (solicitud == null)
                throw new ApplicationException($"No se encontró la solicitud con solId: {solId}.");

            return solicitud;
        }
    }
}
