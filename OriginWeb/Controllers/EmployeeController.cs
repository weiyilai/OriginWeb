using OriginWeb.VM.Employee;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OriginWeb.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Search()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SearchResult(List<EmployeesVM> employees)
        {
            return PartialView("_SearchList", employees);
        }
    }
}