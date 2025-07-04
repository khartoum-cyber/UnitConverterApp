using Microsoft.AspNetCore.Mvc;

namespace UnitConverterAngular.Controllers
{
    public class ConversionController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
