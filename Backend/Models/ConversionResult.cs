namespace UnitConverterWebAPI.Models
{
    public class ConversionResult
    {
        public double OriginalValue { get; set; }
        public string FromUnit { get; set; }
        public double ConvertedValue { get; set; }
        public string ToUnit { get; set; }
    }
}
