using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace FabrikamFiber.Web.UITests
{

   /// <summary>
   ///    Summary description for CodedUITest1
   /// </summary>
   //[CodedUITest]
   public class CodedUITest1
   {

      private UIMap map;
      private TestContext testContextInstance;

      public CodedUITest1()
      {
      }

      /// <summary>
      ///    Gets or sets the test context which provides
      ///    information about and functionality for the current test run.
      /// </summary>
      public TestContext TestContext
      {
         get
         {
            return testContextInstance;
         }
         set
         {
            testContextInstance = value;
         }
      }
      public UIMap UIMap
      {
         get
         {
            if ((this.map == null)) { this.map = new UIMap(); }

            return this.map;
         }
      }

      [DataSource("Microsoft.VisualStudio.TestTools.DataSource.TestCase",
         "http://vsalm:8080/tfs/fabrikamfibercollection;FabrikamFiber", "79", DataAccessMethod.Sequential), TestMethod]
      public void CodedUITestMethod1()
      {
         // To generate code for this test, select "Generate Code for Coded UI Test" from the shortcut menu and select one of the menu items.
         // For more information on generated code, see http://go.microsoft.com/fwlink/?LinkId=179463
         this.UIMap.Loadhttp127001100();
         this.UIMap.ClickonCustomerslink();
         this.UIMap.ClickonCreateNewbutton();
         this.UIMap.EntercustomerdetailsFirstNameLastNameStreetCityStateZipParams.UIFirstNameEditText =
            TestContext.DataRow["FirstName"].ToString();
         this.UIMap.EntercustomerdetailsFirstNameLastNameStreetCityStateZipParams.UILastNameEditText =
            TestContext.DataRow["LastName"].ToString();
         this.UIMap.EntercustomerdetailsFirstNameLastNameStreetCityStateZipParams.UIStreetEditText =
            TestContext.DataRow["Street"].ToString();
         this.UIMap.EntercustomerdetailsFirstNameLastNameStreetCityStateZipParams.UICityEditText =
            TestContext.DataRow["City"].ToString();
         this.UIMap.EntercustomerdetailsFirstNameLastNameStreetCityStateZipParams.UIStateEditText =
            TestContext.DataRow["State"].ToString();
         this.UIMap.EntercustomerdetailsFirstNameLastNameStreetCityStateZipParams.UIZipEditText =
            TestContext.DataRow["Zip"].ToString();
         this.UIMap.EntercustomerdetailsFirstNameLastNameStreetCityStateZip();
         this.UIMap.ClickCreate();
      }

      #region Additional test attributes

      // You can use the following additional attributes as you write your tests:

      ////Use TestInitialize to run code before running each test 
      //[TestInitialize()]
      //public void MyTestInitialize()
      //{        
      //    // To generate code for this test, select "Generate Code for Coded UI Test" from the shortcut menu and select one of the menu items.
      //    // For more information on generated code, see http://go.microsoft.com/fwlink/?LinkId=179463
      //}

      ////Use TestCleanup to run code after each test has run
      //[TestCleanup()]
      //public void MyTestCleanup()
      //{        
      //    // To generate code for this test, select "Generate Code for Coded UI Test" from the shortcut menu and select one of the menu items.
      //    // For more information on generated code, see http://go.microsoft.com/fwlink/?LinkId=179463
      //}
      #endregion
   }

}