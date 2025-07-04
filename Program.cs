namespace UnitConverterAngular
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddSpaStaticFiles(
                configuration =>
                {
                    configuration.RootPath =
                        "ClientApp/dist";
                });

            var app = builder.Build();

            // Configure the HTTP request pipeline.

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
