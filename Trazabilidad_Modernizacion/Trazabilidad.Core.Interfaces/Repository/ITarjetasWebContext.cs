using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;

namespace Trazabilidad.Core.Interfaces.Repository
{
    public interface ITarjetasWebContext
    {
        int SaveChanges();

        DbSet<AcusesADDOC> AcusesADDOC { get; set; }
        DbSet<Alertas> Alertas { get; set; }
        DbSet<AlertasDestinos> AlertasDestinos { get; set; }
        DbSet<AlertasPlastico> AlertasPlastico { get; set; }
        DbSet<AlertasTiposEmail> AlertasTiposEmail { get; set; }
        DbSet<Canales> Canales { get; set; }
        DbSet<DistribucionConfig> DistribucionConfig { get; set; }
        DbSet<Estados> Estados { get; set; }
        DbSet<Estados_Secuencia> Estados_Secuencia { get; set; }
        DbSet<MarcasTC> MarcasTC { get; set; }
        DbSet<Plasticos> Plasticos { get; set; }
        DbSet<PlasticosPendientes_Temporal> PlasticosPendientes_Temporal { get; set; }
        DbSet<ProductosTC> ProductosTC { get; set; }
        DbSet<RecursosHumanos> RecursosHumanos { get; set; }
        DbSet<Solicitudes> Solicitudes { get; set; }
        DbSet<Solicitudes_Seguimiento> Solicitudes_Seguimiento { get; set; }
        DbSet<TipoAlertas> TipoAlertas { get; set; }
        DbSet<AcusesInventario_Temporal> AcusesInventario_Temporal { get; set; }
        DbSet<Conversiones> Conversiones { get; set; }
        DbSet<Mensajes> Mensajes { get; set; }

}
}
