namespace UnitConverterAngular.Services
{
    public class UnitConversionService
    {

        private readonly Dictionary<string, Dictionary<string, Func<double, double>>> _conversions =
            new Dictionary<string, Dictionary<string, Func<double, double>>>
            {
                ["Length"] = new Dictionary<string, Func<double, double>>
                {
                    ["ft->cm"] = value => value * 30.48,
                    ["cm->ft"] = value => value / 30.48,
                    ["m->km"] = value => value / 1000,
                    ["km->m"] = value => value * 1000
                },
                ["Weight"] = new Dictionary<string, Func<double, double>>
                {
                    ["kg->lb"] = value => value * 2.20462,
                    ["lb->kg"] = value => value / 2.20462
                },
                ["Temperature"] = new Dictionary<string, Func<double, double>>
                {
                    ["c->f"] = value => (value * 9 / 5) + 32,
                    ["f->c"] = value => (value - 32) * 5 / 9
                }
            };

    }
}
