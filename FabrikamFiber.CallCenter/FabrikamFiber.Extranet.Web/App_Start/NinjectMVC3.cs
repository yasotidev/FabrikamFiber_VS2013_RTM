using FabrikamFiber.DAL.Data;
using FabrikamFiber.Extranet.Web;

using Microsoft.Web.Infrastructure.DynamicModuleHelper;

using Ninject;
using Ninject.Web.Mvc;

using WebActivator;

[assembly: PreApplicationStartMethod(typeof (NinjectMVC3), "Start")]
////[assembly: WebActivator.ApplicationShutdownMethodAttribute(typeof(FabrikamFiber.Extranet.Web.App_Start.NinjectMVC3), "Stop")]

namespace FabrikamFiber.Extranet.Web
{

   public class NinjectMVC3
   {

      private static NinjectMVC3 instance;
      private readonly IBootstrapper bootstrapper;

      protected NinjectMVC3(IBootstrapper bootstrapper)
      {
         this.bootstrapper = bootstrapper;
      }

      protected static NinjectMVC3 Instance
      {
         get
         {
            return instance ?? (instance = new NinjectMVC3(new Bootstrapper()));
         }
      }

      /// <summary>
      ///    Starts the application
      /// </summary>
      public static void Start()
      {
         DynamicModuleUtility.RegisterModule(typeof (OnePerRequestModule));
         Instance.InnerStart();
      }

      /// <summary>
      ///    Stops the application.
      /// </summary>
      public static void Stop()
      {
         Instance.InnerShutDown();
      }

      public IKernel CreateKernel()
      {
         var kernel = new StandardKernel();
         this.RegisterServices(kernel);
         return kernel;
      }

      /// <summary>
      ///    Load your modules or register your services here!
      /// </summary>
      /// <param name="kernel">The kernel.</param>
      public void RegisterServices(IKernel kernel)
      {
         kernel.Bind<ICustomerRepository>().To<CustomerRepository>();
         kernel.Bind<IEmployeeRepository>().To<EmployeeRepository>();
         kernel.Bind<IServiceTicketRepository>().To<ServiceTicketRepository>();
         kernel.Bind<IServiceLogEntryRepository>().To<ServiceLogEntryRepository>();

         kernel.Bind<IAlertRepository>().To<AlertRepository>();
         kernel.Bind<IMessageRepository>().To<MessageRepository>();
         kernel.Bind<IScheduleItemRepository>().To<ScheduleItemRepository>();
      }

      protected void InnerStart()
      {
         this.bootstrapper.Initialize(this.CreateKernel);
      }

      protected void InnerShutDown()
      {
         this.bootstrapper.ShutDown();
      }

   }

}