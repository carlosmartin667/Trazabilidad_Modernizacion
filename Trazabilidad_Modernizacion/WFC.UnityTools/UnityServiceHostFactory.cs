using Microsoft.Practices.Unity.Configuration;
using System;
using System.Configuration;
using System.ServiceModel;
using System.ServiceModel.Activation;
using Unity;

namespace WCF.UnityTools
{
    public class UnityServiceHostFactory : ServiceHostFactory

    {

        protected override ServiceHost CreateServiceHost(

                                          Type serviceType, Uri[] baseAddresses)

        {

            UnityServiceHost serviceHost = new UnityServiceHost(serviceType, baseAddresses);

            UnityContainer container = new UnityContainer();
            container.EnableDebugDiagnostic();
            container.EnableDiagnostic();
            container.AddExtension(new Diagnostic());

            serviceHost.Container = container;


            //configure container

            UnityConfigurationSection section = (UnityConfigurationSection)ConfigurationManager.GetSection("unity");

            section.Configure(container);

            //section.Containers.Default.Configure(serviceHost.Container);



            return serviceHost;

        }

    }
}
