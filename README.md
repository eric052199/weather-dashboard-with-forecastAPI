# weather-dashboard-with-forecastAPI

# 🌦️ Weather Forecast App

A simple **Angular standalone application** that fetches and displays **historical weather data** from the **Singapore Data API**. Users can **select a date**, retrieve past weather forecasts, and view the data in **a table (AG Grid) and a chart (Highcharts)**.

---

## 🚀 Features  

- ✅ Fetches **30 days of historical weather data**  
- ✅ Displays data in **sortable, filterable AG Grid table**  
- ✅ Visualizes temperature & humidity trends using **Highcharts**  
- ✅ Handles **loading & error states** gracefully  

---

## 📂 Project Structure  

| File                          | Description                                 |
|-------------------------------|---------------------------------------------|
| `app.component.ts`            | Main UI, handles user input & API calls    |
| `weather.service.ts`          | Fetches & processes weather data           |
| `weather-table.component.ts`  | Displays data in **AG Grid table**         |
| `weather-chart.component.ts`  | Displays data in **Highcharts line chart** |

---

## ⚙️ Setup & Run  

1️⃣ **Install dependencies**  
```sh
npm install
```

2️⃣ **Run the app**  
```sh
npm start
```

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/eric052199/weather-dashboard-with-forecastAPI)