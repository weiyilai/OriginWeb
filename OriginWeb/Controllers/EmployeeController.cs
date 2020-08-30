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

        /// <summary>
        /// 新增畫面
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        public ActionResult AddResult()
        {
            return PartialView("_PopupModal", new EmployeesVM());
        }

        /// <summary>
        /// 編輯畫面
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult EditResult(EmployeesVM employee)
        {
            return PartialView("_PopupModal", employee);
        }
    }
}