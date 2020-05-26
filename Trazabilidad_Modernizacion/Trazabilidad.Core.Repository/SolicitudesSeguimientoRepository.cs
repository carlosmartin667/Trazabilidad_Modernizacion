using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;
using Trazabilidad.Core.Interfaces.Repository;

namespace Trazabilidad.Core.Repository
{
   public class SolicitudesSeguimientoRepository: BaseRepository<Solicitudes_Seguimiento>, ISolicitudesSeguimientoRepository
    {

        public SolicitudesSeguimientoRepository(ITarjetasWebContext context) : base(context)
        {
        }

        public Solicitudes_Seguimiento AgrgarSolicitudesSeguimiento(Solicitudes_Seguimiento solicitudes_Seguimiento)
        {
            Insert(solicitudes_Seguimiento);
            context.SaveChanges();
            return solicitudes_Seguimiento;
        }

        public List<Solicitudes_Seguimiento> ObtenerSeguimiento(int solId)
        {
            try
            {
                var Seguimiento = dbSet.Where(x => x.solId == solId).ToList();
                return Seguimiento;
            }
            catch (Exception ex)
            {

                var test = ex.InnerException;
                throw;
            }
           
        }
    }
}
