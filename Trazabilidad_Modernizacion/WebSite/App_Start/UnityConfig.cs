using System.Web.Mvc;
using Trazabilidad.Core.Interfaces;
using Trazabilidad.Core.Interfaces.Repository;
using Unity;
using Unity.Mvc5;

namespace WebSite
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterSingleton<IPlasticosRepository, Trazabilidad.Core.Repository.PlasticosRepository>();
            container.RegisterType<ITarjetasWebContext, Trazabilidad.Core.Repository.TarjetasWebContext>();
            container.RegisterType<IMarcaRepository, Trazabilidad.Core.Repository.MarcaTcRepository>();
			container.RegisterType<IEstadoRepository, Trazabilidad.Core.Repository.EstadoRepository>();
			container.RegisterType<IProductoTCRepository, Trazabilidad.Core.Repository.ProductoTCRepository>();
			container.RegisterType<IGrupoAfinidadRepository, Trazabilidad.Core.Repository.GrupoAfinidadRepository>();
			container.RegisterType<IConversionRepository,Trazabilidad.Core.Repository.ConversionesRepository>();
			container.RegisterType<IModalidadesEntregasRepository, Trazabilidad.Core.Repository.ModalidadesEntregaRepository>();
            container.RegisterType<ISolicitudesRepository, Trazabilidad.Core.Repository.SolicitudesRepository>();
            container.RegisterType<ITipoSolicitudesRepository,Trazabilidad.Core.Repository.TipoSolicitudesRepository>();
            container.RegisterType<ISolicitudesSeguimientoRepository, Trazabilidad.Core.Repository.SolicitudesSeguimientoRepository>();
            container.RegisterType<IEstados_SecuenciaRepository, Trazabilidad.Core.Repository.Estados_SecuenciaRepository>();
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}