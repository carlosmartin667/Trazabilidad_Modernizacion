using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;
using Trazabilidad.Core.Interfaces;
using Trazabilidad.Core.Interfaces.Repository;

namespace Trazabilidad.Core.Repository
{
    public class TipoSolicitudesRepository : BaseRepository<TipoSolicitudes>, ITipoSolicitudesRepository
    {
        public TipoSolicitudesRepository(ITarjetasWebContext context) : base(context)
        {
        }

        public TipoSolicitudes ObtenerTipoSolicitudes(decimal  tsoId)
        {

            try
            {

                if (tsoId == 0)
                    throw new ArgumentException("Se debe proporcionar un Id de TipoSolicitud");

                var TipoSolicitud = dbSet.FirstOrDefault(x => x.tsoId == tsoId);

                //Solicitudes solicitud = Get().FirstOrDefault(x => x.solId == solId);

                if (TipoSolicitud == null)
                    throw new ApplicationException($"No se encontró la solicitud con TipoSolicitud: {tsoId}.");
                return TipoSolicitud;
            }
            catch (Exception EX)
            {

                throw;
            }




        }
    }
}
