using Microsoft.AspNetCore.Mvc;
using UnitConverterAngular.Models;
using UnitConverterAngular.Services;

namespace UnitConverterAngular.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ConversionController : ControllerBase
    {
        //private readonly UnitConversionService _conversionService;

        //public ConversionController(UnitConversionService conversionService)
        //{
        //    _conversionService = conversionService;
        //}

        private readonly UnitConversionService _conversionService = new UnitConversionService();

        [HttpPost]
        public ActionResult<ConversionResult> Convert([FromBody] ConversionRequest request)
        {
            try
            {
                var result = _conversionService.Convert(request.Category, request.FromUnit, request.ToUnit, request.Value);
                return Ok(new ConversionResult
                {
                    OriginalValue = request.Value,
                    FromUnit = request.FromUnit,
                    ConvertedValue = result,
                    ToUnit = request.ToUnit
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
