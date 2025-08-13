using UnitConverterWebAPI.Services;
using UnitConverterWebAPI.Services.Interfaces;

namespace UnitConverterWebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddSpaStaticFiles(
                configuration =>
                {
                    configuration.RootPath =
                        "ClientApp/dist";
                });

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                    policy =>
                    {
                        policy.WithOrigins("http://localhost:4200/").AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                    });
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

            app.UseCors(MyAllowSpecificOrigins);

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}