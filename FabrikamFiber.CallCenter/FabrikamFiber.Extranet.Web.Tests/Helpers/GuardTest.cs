using System;

using FabrikamFiber.Extranet.Web.Helpers;

using NUnit.Framework;

using Xunit;

namespace FabrikamFiber.Extranet.Web.Tests.Helpers
{

   [TestFixture]
   public class GuardTest
   {

      [Fact]
      public void ItShouldThrowExceptionIfArgumentIsNull()
      {
         try { Guard.ThrowIfNull(null, "value"); }
         catch (ArgumentNullException) {
         }
      }

      [Test]
      public void ItShouldNotThrowExceptionIfArgumentIsNotNull()
      {
         Guard.ThrowIfNull("this is not null", "value");
      }

      [Test]
      [ExpectedException(typeof (ArgumentNullException))]
      public void ItShouldThrowExceptionIfArgumentIsNullOrEmpty()
      {
         Guard.ThrowIfNullOrEmpty(string.Empty, "value");
      }

      [Test]
      public void ItShouldNotThrowExceptionIfArgumentIsNotNullOrEmpty()
      {
         Guard.ThrowIfNullOrEmpty("not null or empty", "value");
      }

      [Test]
      [ExpectedException(typeof (ArgumentOutOfRangeException))]
      public void ItShouldThrowExceptionIfArgumentIsNotInRange()
      {
         Guard.ThrowIfNotInRange(1, 2, 3, "value");
      }

      [Test]
      public void ItShouldNotThrowExceptionIfArgumentIsNotLesserThanTheMin()
      {
         Guard.ThrowIfNotInRange(2, 1, 3, "value");
      }

   }

}