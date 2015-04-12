using System.Collections.Generic;

using FabrikamFiber.DAL.Models;

namespace FabrikamFiber.Web.ViewModels
{

   public class AssignViewModel
   {

      public ServiceTicket ServiceTicket { get; set; }

      public IEnumerable<Employee> AvailableEmployees { get; set; }

      public IEnumerable<ScheduleItem> ScheduleItems { get; set; }

   }

}