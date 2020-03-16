using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;

namespace Trazabilidad.Core.Interfaces.Repository
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> Get(Func<TEntity, bool> filter, string includeProperties = "");

        IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null, string includeProperties = "");

        IEnumerable<TEntity> Get();

        IEnumerable<TEntity> Get(String IncludeProperties);

        IEnumerable<TEntity> Get(List<Func<TEntity, bool>> filtros, string includeProperties, Int32 NroPagina = 0, Int32 RegistrosPorPagina = int.MaxValue);

        TEntity GetByID(object id);

        TEntity Insert(TEntity entity);

        void Delete(TEntity entityToDelete);

        void Update(TEntity entityToUpdate);

        IEnumerable<TEntity> GetAsNoTracking(Func<TEntity, bool> query);
    }
}
