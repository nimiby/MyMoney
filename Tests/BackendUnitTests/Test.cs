using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NUnit;
using NUnit.Framework;

namespace MyMoney.Tests.BackendUnitTests
{
    //[TestFixture]
    public class TestClass
    {
        [Test(Description="My Test Case")]
        public void TestCase()
        {
            Assert.IsTrue(true);
        }

        [Test]
        public void TestCase2()
        {
            Assert.IsTrue(false);
        }
    }
}