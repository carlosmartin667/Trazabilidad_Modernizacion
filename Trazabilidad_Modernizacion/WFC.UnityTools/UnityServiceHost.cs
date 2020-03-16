using System;
using System.ServiceModel;
using Unity;

namespace WCF.UnityTools
{
    public class UnityServiceHost : ServiceHost

    {

        public UnityContainer Container { set; get; }

        public UnityServiceHost()
            : base()

        {
            Container = new UnityContainer();
            Container.EnableDebugDiagnostic();
            Container.EnableDiagnostic();
            Container.AddExtension(new Diagnostic());
        }

        public UnityServiceHost(Type serviceType, params Uri[] baseAddresses)

            : base(serviceType, baseAddresses)

        {
            Container = new UnityContainer();
            Container.EnableDebugDiagnostic();
            Container.EnableDiagnostic();
            Container.AddExtension(new Diagnostic());
        }

        protected override void OnOpening()

        {

            if (Description.Behaviors.Find<UnityServiceBehavior>() == null)

                Description.Behaviors.Add(new UnityServiceBehavior(Container));
            base.OnOpening();

        }







    }
}
