namespace UnitConverterAngular.Services.Interfaces
{
    public interface IUnitConversionService
    {
        public double Convert(string category, string fromUnit, string toUnit, double value);
    }
}