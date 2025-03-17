import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'https://api.data.gov.sg/v1/environment/4-day-weather-forecast';

  constructor(private http: HttpClient) {}

  getForecastData(selectedDate: string): Observable<any[]> {
    const requests: Observable<any>[] = [];
    let currentDate = new Date(selectedDate);
  
    //Start date to fetch starts from (selectedDate - 2)
    currentDate.setDate(currentDate.getDate() - 2);
  
    //Create 30 API requests (selectedDate - 2 to selectedDate - 31)
    for (let i = 0; i < 30; i++) {
      const dateStr = currentDate.toISOString().split('T')[0];
  
      console.log(`Fetching forecast for: ${dateStr}`);
      requests.push(this.http.get(`${this.baseUrl}?date=${dateStr}`));
  
      currentDate.setDate(currentDate.getDate() - 1);
    }
  
    //Execute all API calls in parallel
    return forkJoin(requests).pipe(
      map((responses) => {
        console.log("Full API Responses:", responses);
        return this.processForecastData(responses);
      })
    );
  }
  
  
  
  

  private processForecastData(responses: any[]): any[] {
    const forecastMap = new Map<string, { tempValues: number[], humidityValues: number[] }>();
  
    responses.forEach((response: any) => {
      if (!response || !response.items || response.items.length === 0) {
        console.error("No forecast data found in response:", response);
        return;
      }
  
      response.items.forEach((item: any) => {
        if (!item.forecasts || item.forecasts.length === 0) {
          console.warn("No forecasts in item:", item);
          return;
        }
  
        //=Only get the first forecast (the "next day's" forecast)
        const forecast = item.forecasts[0];
        const date = forecast.date;
        const tempLow = forecast.temperature.low;
        const tempHigh = forecast.temperature.high;
        const humidityLow = forecast.relative_humidity.low;
        const humidityHigh = forecast.relative_humidity.high;
  
        if (!forecastMap.has(date)) {
          forecastMap.set(date, { tempValues: [], humidityValues: [] });
        }
  
        //Push values to calculate the average later
        forecastMap.get(date)!.tempValues.push((tempLow + tempHigh) / 2);
        forecastMap.get(date)!.humidityValues.push((humidityLow + humidityHigh) / 2);
      });
    });
  
    //Convert map data into final array format
    const aggregatedData = Array.from(forecastMap.entries()).map(([date, values]) => {
      const avgTemp = values.tempValues.reduce((sum, t) => sum + t, 0) / values.tempValues.length;
      const avgHumidity = values.humidityValues.reduce((sum, h) => sum + h, 0) / values.humidityValues.length;
  
      return {
        date,
        temperature: parseFloat(avgTemp.toFixed(2)),
        humidity: parseFloat(avgHumidity.toFixed(2))
      };
    });
  
    console.log("✅ Aggregated Forecast Data (First Forecast Only):", aggregatedData);
    return aggregatedData;
  }
  
}
