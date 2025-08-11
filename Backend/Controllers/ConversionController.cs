using Microsoft.AspNetCore.Mvc;
using UnitConverterWebAPI.Models;
using UnitConverterWebAPI.Services.Interfaces;

namespace UnitConverterWebAPI.Controllers
{

    [ApiController]
    [Route("api/conversion")]
    public class ConversionController : ControllerBase
    {
        private readonly IUnitConversionService _conversionService;

        public ConversionController(IUnitConversionService conversionService)
        {
            _conversionService = conversionService;
        }

        //private readonly UnitConversionService _conversionService = new UnitConversionService();

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
