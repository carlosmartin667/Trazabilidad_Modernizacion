using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;
using Trazabilidad.Core.Interfaces.Repository;

namespace Trazabilidad.Core.Repository
{
    public class TarjetasWebContext : DbContext, ITarjetasWebContext
    {
        public TarjetasWebContext() : base("name=629_Tarjetas_Web")
        {
            Configuration.LazyLoadingEnabled = true;
            Configuration.AutoDetectChangesEnabled = true;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
			//throw new UnintentionalCodeFirstException();
			base.OnModelCreating(modelBuilder);
			modelBuilder.Entity<MarcasTC>()
				.ToTable("MarcasTC");
			base.OnModelCreating(modelBuilder);
			modelBuilder.Entity<ProductosTC>()
				.ToTable("ProductosTC");
			base.OnModelCreating(modelBuilder);
			modelBuilder.Entity<GruposAfinidad>()
				.ToTable("GruposAfinidad");
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<AlertasTiposEmail>()
                .ToTable("AlertasTiposEmail");
            base.OnModelCreating(modelBuilder);
			modelBuilder.Entity<ModalidadesEntregas>()
				.ToTable("ModalidadesEntregas");
            modelBuilder.Entity<AlertasTiposEmail>()
                .HasKey(c => new { c.ateId, c.talId });
		}



        public DbSet<AcusesADDOC> AcusesADDOC { get; set; }
        public DbSet<Alertas> Alertas { get; set; }
        public DbSet<AlertasDestinos> AlertasDestinos { get; set; }
        public DbSet<AlertasPlastico> AlertasPlastico { get; set; }
        public DbSet<AlertasTiposEmail> AlertasTiposEmail { get; set; }
        public DbSet<Canales> Canales { get; set; }
        public DbSet<DistribucionConfig> DistribucionConfig { get; set; }
        public DbSet<Estados> Estados { get; set; }
        public DbSet<Estados_Secuencia> Estados_Secuencia { get; set; }
		public DbSet<GruposAfinidad> GruposAfinidad { get; set; }
        public DbSet<MarcasTC> MarcasTC { get; set; }
        public DbSet<Plasticos> Plasticos { get; set; }
        public DbSet<PlasticosPendientes_Temporal> PlasticosPendientes_Temporal { get; set; }
        public DbSet<ProductosTC> ProductosTC { get; set; }
        public DbSet<RecursosHumanos> RecursosHumanos { get; set; }
        public DbSet<Solicitudes> Solicitudes { get; set; }
        public DbSet<Solicitudes_Seguimiento> Solicitudes_Seguimiento { get; set; }
        public DbSet<TipoAlertas> TipoAlertas { get; set; }
        //public DbSet<AcusesInventario_Temporal> AcusesInventario_Temporal { get; set; }
        public DbSet<Conversiones> Conversiones { get; set; }
        public DbSet<Mensajes> Mensajes { get; set; }
         DbSet<TipoSolicitudes> TipoSolicitudes { get; set; }

    }
}
