using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;
using Trazabilidad.Core.Interfaces;
using Trazabilidad.Core.Interfaces.Repository;

namespace Trazabilidad.Core.Repository
{
    public static class ExtensionMethods
    {
        public static Func<T, bool> AndAlso<T>(this Func<T, bool> predicate1, Func<T, bool> predicate2)
        {
            return arg => predicate1(arg) && predicate2(arg);
        }
    }

    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        protected DbContext context;
        protected DbSet<TEntity> dbSet;

        public BaseRepository(ITarjetasWebContext context)
        {
            this.context = (DbContext)context;
            dbSet = ((DbContext)context).Set<TEntity>();
        }

        public virtual IEnumerable<TEntity> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = "")
        {
            IQueryable<TEntity> query = dbSet;

            if (filter != null)
            {
                query = query.Where(filter);
            }

            foreach (var includeProperty in includeProperties.Split
                (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            if (orderBy != null)
            {
                return orderBy(query).ToList();
            }
            else
            {
                return query.ToList();
            }
        }

        public virtual IEnumerable<TEntity> Get(Func<TEntity, bool> filter, string includeProperties = "")
        {
            IQueryable<TEntity> query = dbSet.AsNoTracking();
            foreach (var includeProperty in includeProperties.Split
              (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }
            return query.Where(filter);
        }

        public virtual IEnumerable<TEntity> Get()
        {
            return dbSet;
        }
        public virtual IEnumerable<TEntity> Get(string includeProperties)
        {
            IQueryable<TEntity> query = dbSet;
            foreach (var includeProperty in includeProperties.Split
            (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            return query;
        }
        public virtual IEnumerable<TEntity> Get(List<Func<TEntity, bool>> filtros, string includeProperties, Int32 NroPagina = 0, Int32 RegistrosPorPagina = int.MaxValue)
        {

            //Func<TEntity, bool> filter = x => x.Id > 0;
            Func<TEntity, bool> filter = x => x.ToString().Length > 0;
            foreach (var item in filtros)
            {
                filter = filter.AndAlso(item);
            }

            IQueryable<TEntity> query = dbSet;
            foreach (var includeProperty in includeProperties.Split
              (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }
            return query.AsNoTracking().Where(filter).Skip(NroPagina * RegistrosPorPagina).Take(RegistrosPorPagina);
        }


        public virtual TEntity GetByID(object id)
        {
            return dbSet.Find(id);
        }


        public virtual TEntity Insert(TEntity entity)
        {

            return dbSet.Add(entity);
        }

        public virtual void Delete(object id)
        {

            TEntity entityToDelete = dbSet.Find(id);
            Delete(entityToDelete);
        }

        public virtual void Delete(TEntity entityToDelete)
        {
            if (context.Entry(entityToDelete).State == EntityState.Detached)
            {
                dbSet.Attach(entityToDelete);
            }
            dbSet.Remove(entityToDelete);
        }

        public virtual void Update(TEntity entityToUpdate)
        {

            dbSet.Attach(entityToUpdate);
            context.Entry(entityToUpdate).State = EntityState.Modified;



        }
        public virtual IEnumerable<TEntity> GetAsNoTracking(Func<TEntity, bool> query)
        {
            IQueryable<TEntity> dbset = dbSet.AsNoTracking();

            return dbset.Where(query);

        }

    }
}
