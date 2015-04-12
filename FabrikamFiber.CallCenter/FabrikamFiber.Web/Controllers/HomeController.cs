using System.Web.Mvc;

using FabrikamFiber.DAL.Data;
using FabrikamFiber.Web.ViewModels;

namespace FabrikamFiber.Web.Controllers
{

   public class HomeController : Controller
   {

      private readonly IAlertRepository alertRepository;
      private readonly IMessageRepository messageRepository;
      private readonly IScheduleItemRepository scheduleItemRepository;
      private readonly IServiceTicketRepository serviceTickets;

      public HomeController(
         IServiceTicketRepository serviceTickets,
         IMessageRepository messageRepository,
         IAlertRepository alertRepository,
         IScheduleItemRepository scheduleItemRepository)
      {
         this.serviceTickets = serviceTickets;
         this.messageRepository = messageRepository;
         this.alertRepository = alertRepository;
         this.scheduleItemRepository = scheduleItemRepository;
      }

      public ActionResult Index()
      {
         var viewModel = new DashboardViewModel
         {
            ScheduleItems = this.scheduleItemRepository.All,
            Messages = this.messageRepository.All,
            Alerts = this.alertRepository.All,
            Tickets =
               this.serviceTickets.AllIncluding(
                  serviceticket => serviceticket.Customer,
                  serviceticket => serviceticket.CreatedBy,
                  serviceticket => serviceticket.AssignedTo),
         };

         return View(viewModel);
      }

   }

}