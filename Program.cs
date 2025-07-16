using UnitConverterAngular.Services;
using UnitConverterAngular.Services.Interfaces;

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

            builder.Services.AddScoped<IUnitConversionService, UnitConversionService>();

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Enable Swagger only in development (optional)
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

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
//todo check dependency injection