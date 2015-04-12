using System.Linq;
using System.Web.Mvc;

using FabrikamFiber.DAL.Data;

namespace FabrikamFiber.Extranet.Web.Controllers
{

   public class HomeController : Controller
   {

      private readonly IScheduleItemRepository scheduleItemRepository;
      private readonly IServiceTicketRepository serviceTicketRepository;

      public HomeController(
         IServiceTicketRepository serviceTicketRepository,
         IScheduleItemRepository scheduleItemRepository)
      {
         this.serviceTicketRepository = serviceTicketRepository;
         this.scheduleItemRepository = scheduleItemRepository;
      }

      public ActionResult Index()
      {
         return View(this.serviceTicketRepository.All.Take(5));
      }

   }

}