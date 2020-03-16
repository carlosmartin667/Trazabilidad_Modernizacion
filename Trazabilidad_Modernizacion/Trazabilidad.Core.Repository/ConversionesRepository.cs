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
    public class ConversionesRepository : BaseRepository<Conversiones>, IConversionRepository
    {
        public ConversionesRepository(ITarjetasWebContext context) : base(context)
        { }

        public Conversiones ObtenerConversionCartera(int grupo_cartera_cod)
        
        {

            //GRUPOCARTERA_SO

            var Cartera = dbSet.FirstOrDefault(x => x.concepto_cod == "GRUPOCARTERA_SO" && x.codigo_ORIGEN == grupo_cartera_cod.ToString());


            return Cartera;

        }


        public Conversiones ObtenerConversionMercado(int mer_id)
        {
            
            var Mercado = dbSet.FirstOrDefault(x => x.concepto_cod == "SAS_MERCADO" && x.codigo_ORIGEN == mer_id.ToString()); 

            return Mercado;
            
        }

        public List<Conversiones> ObtenerConversionProductos()
        {
            var Productos = dbSet.Where(x => x.concepto_cod == "SUBPRODUCTOS_PIEZAS").ToList();
            return Productos;
        }


        public List<Conversiones> ObtenerConversionMarcas()
        {
            var Marcas = dbSet.Where(x => x.concepto_cod == "PRODUCTOS_PIEZAS").ToList();
            return Marcas;
        }
    }
}
