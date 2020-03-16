using System;
using System.ServiceModel;
using System.ServiceModel.Channels;
using System.ServiceModel.Dispatcher;
using Unity;

namespace WCF.UnityTools
{

    public class UnityInstanceProvider : IInstanceProvider

    {

        public UnityContainer Container { set; get; }

        public Type ServiceType { set; get; }



        public UnityInstanceProvider()

            : this(null)

        {

        }

        public UnityInstanceProvider(Type type)

        {

            ServiceType = type;

            Container = new UnityContainer();
            Container.EnableDebugDiagnostic();
            Container.EnableDiagnostic();
            Container.AddExtension(new Diagnostic());

        }

        public object GetInstance(InstanceContext instanceContext, Message message)
        {
            try
            {
                return Container.Resolve(ServiceType);
            }
            catch (Exception ex)
            {

                throw ex;
            }
           
        }



        public object GetInstance(InstanceContext instanceContext)
        {
            try
            {
                return GetInstance(instanceContext, null);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void ReleaseInstance(InstanceContext instanceContext, object instance)
        {

        }
    }
}
