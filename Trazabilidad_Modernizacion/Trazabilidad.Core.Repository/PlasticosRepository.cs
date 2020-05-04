using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;
using Trazabilidad.Core.Interfaces.Repository;

namespace Trazabilidad.Core.Repository
{
    public class PlasticosRepository : BaseRepository<Plasticos>, IPlasticosRepository
    {
        public PlasticosRepository(ITarjetasWebContext _context) : base(_context)
        { }

        public Plasticos ObtenerPlastico(int IdPlastico, string IncludeProperties = "")
        {
            if (IdPlastico == 0)
                throw new ArgumentException("Se debe proporcionar un Id de Plastico");

            var plastico = dbSet.FirstOrDefault(x => x.Reg_id == IdPlastico);

            //Plasticos plastico = Get(x => x.Reg_id == IdPlastico, IncludeProperties).FirstOrDefault();

            if (plastico == null)
                throw new ApplicationException($"No se encontró Plastico con IdPlastico: {IdPlastico}.");

            return plastico;
        }


        public int ObtenerTotalPlasticos()
        {
            var resultadorTotalPlasticos = dbSet.Count();
            return resultadorTotalPlasticos;
        }



        List<Plasticos> IPlasticosRepository.Paginador(int PaginaActual)
        {
            try
            {
                var resultado = dbSet.OrderBy(x => x.Reg_id).Skip((PaginaActual - 1) * 10).Take(10).ToList();
                return resultado;
            }
            catch (Exception ex )
            {

                throw;
            }
  
        }
    }
}
