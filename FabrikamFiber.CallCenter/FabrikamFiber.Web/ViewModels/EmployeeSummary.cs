using FabrikamFiber.DAL.Models;

namespace FabrikamFiber.Web.ViewModels
{

   public class EmployeeSummary
   {

      public Employee Employee { get; set; }

      public Customer CurrentCustomer { get; set; }

      public int AssignedTickets { get; set; }

   }

}