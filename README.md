# UnitConverterApp

✅ Here's how the architecture would look:

🔹 **Frontend (Angular SPA)**
- Built with Angular (TypeScript, HTML, CSS)
- Handles:
  - User interface
  - Input forms (e.g., value to convert, unit types)
  - Displaying results
  - Making HTTP requests to the backend API

---

🔹 **Backend (ASP.NET Core Web API)**
- Built with ASP.NET Core
- Handles:
	- Business logic (e.g., conversion formulas)
	- Unit definitions and categories (length, weight, temperature, etc.)
	- API endpoints (e.g., /api/convert?from=kg&to=lb&value=10)
	- Optional: user authentication, logging, database storage
---
🔄 How They Communicate

Angular uses HttpClient to send requests to the ASP.NET Core API.
The API returns JSON responses with the converted values.
Angular updates the UI with the results.

---
🧱 Example Flow

- User enters: Convert 10 kilometers to miles
- Angular sends: GET /api/convert?from=km&to=mi&value=10
- ASP.NET Core processes the request and returns: 6.21371
- Angular displays: 10 kilometers = 6.21371 miles

___

## 🌐 Project Root Structure

```plaintext
/UnitConverterApp
│
├── /frontend/           # Angular SPA
│
└── /backend/            # ASP.NET Core Web API
```
___

## ⚙️ Backend (ASP.NET Core Web API)

```plaintext
/backend/
│
├── Controllers/
│   └── ConversionController.cs
│
├── Models/
│   ├── ConversionRequest.cs
│   └── ConversionResult.cs
│
├── Services/
│	│  └──Interfaces/
│	│     └── IUnitConversionService.cs
│	└── UnitConversionService.cs
│
├── Properties/
│   └── launchSettings.json
│
├── Program.cs
└── UnitConverterAPI.csproj
```
