using System;
using System.Linq;
using System.Linq.Expressions;
using System.Web.Mvc;

using FabrikamFiber.DAL.Data;
using FabrikamFiber.DAL.Models;
using FabrikamFiber.Web.Controllers;

using NUnit.Framework;
using NUnit.Mocks;

using Xunit;

namespace FabrikamFiber.Web.Tests.Controllers
{

   [TestFixture]
   public class HomeControllerTest
   {

      [Fact]
      public void IndexReturnsNonNullView()
      {
         var serviceTicketRepo = new DynamicMock(typeof (IServiceTicketRepository));
         var messageRepo = new DynamicMock(typeof (IMessageRepository));
         var alertRepo = new DynamicMock(typeof (IAlertRepository));
         var scheduleItemRepo = new DynamicMock(typeof (IScheduleItemRepository));

         var controller = new HomeController(
            serviceTicketRepo.MockInstance as IServiceTicketRepository,
            messageRepo.MockInstance as IMessageRepository,
            alertRepo.MockInstance as IAlertRepository,
            scheduleItemRepo.MockInstance as IScheduleItemRepository);

         var result = (ViewResult) controller.Index();
      }

      #region Mocks
      private class MockServiceTicketRepository : IServiceTicketRepository
      {

         public IQueryable<ServiceTicket> All
         {
            get
            {
               return null;
            }
         }

         public IQueryable<ServiceTicket> AllForReport(
            params Expression<Func<ServiceTicket, object>>[] includeProperties)
         {
            return null;

         }

         public IQueryable<ServiceTicket> AllIncluding(
            params Expression<Func<ServiceTicket, object>>[] includeProperties)
         {
            return null;

         }

         public void Delete(int id)
         {

         }

         public ServiceTicket Find(int id)
         {
            return null;

         }

         public ServiceTicket FindIncluding(int id, params Expression<Func<ServiceTicket, object>>[] includeProperties)
         {
            return null;
         }

         public void InsertOrUpdate(ServiceTicket serviceticket)
         {

         }

         public void Save()
         {

         }

      }

      private class MockMessageRepository : IMessageRepository
      {

         public IQueryable<Message> All
         {
            get
            {
               return null;
            }
         }

         public IQueryable<Message> AllIncluding(params Expression<Func<Message, object>>[] includeProperties)
         {
            return null;
         }

         public void Delete(int id)
         {

         }

         public Message Find(int id)
         {
            return null;
         }

         public void InsertOrUpdate(Message message)
         {

         }

         public void Save()
         {

         }

      }

      private class MockAlertRepository : IAlertRepository
      {

         public IQueryable<Alert> All
         {
            get
            {
               return null;
            }
         }

         public IQueryable<Alert> AllIncluding(params Expression<Func<Alert, object>>[] includeProperties)
         {
            return null;
         }

         public void Delete(int id)
         {

         }

         public Alert Find(int id)
         {
            return null;
         }

         public void InsertOrUpdate(Alert alert)
         {

         }

         public void Save()
         {

         }

      }

      private class MockScheduleItemRepository : IScheduleItemRepository
      {

         public IQueryable<ScheduleItem> All
         {
            get
            {
               return null;
            }
         }

         public IQueryable<ScheduleItem> AllIncluding(params Expression<Func<ScheduleItem, object>>[] includeProperties)
         {
            return null;
         }

         public void Delete(int id)
         {

         }

         public ScheduleItem Find(int id)
         {
            return null;
         }

         public void InsertOrUpdate(ScheduleItem scheduleitem)
         {

         }

         public void Save()
         {

         }

      }
      #endregion
   }

}