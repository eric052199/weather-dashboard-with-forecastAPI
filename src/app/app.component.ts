import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherTableComponent } from './components/weather-table/weather-table.component';
import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

interface WeatherItem {
  date: string;
  temperature: number | string;
  humidity: number | string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, WeatherTableComponent, WeatherChartComponent]
})
export class AppComponent {
  weatherData: WeatherItem[] = [];
  selectedDate: string = new Date().toISOString().split('T')[0];
  isLoading: boolean = false;
  errorMessage: string = '';

//   // Column Definitions: Defines the columns to be displayed.
//   colDefs: ColDef[] = [
//     { field: "Date" },
//     { field: "🌡 Avg Temperature (°C)" },
//     { field: "💧 Avg Humidity (%)" }
// ];

  constructor(private weatherService: WeatherService) {}

  fetchForecastData() {

    //Validate selected date
    if (!this.isValidDate(this.selectedDate)) {
      this.errorMessage = '❌ Invalid date format. Please enter a valid date (YYYY-MM-DD).';
      return; // Stop execution
    }

    this.errorMessage = '';
    this.isLoading = true;
    this.weatherService.getForecastData(this.selectedDate).subscribe(data => {
      console.log("Processed Weather Data:", data);
      this.weatherData = data;
      this.isLoading = false;
    }, error => {
      console.error("Error fetching weather data:", error);
      this.weatherData = [];
      this.isLoading = false;
    });
  }

  //Function to check if the date format is valid
  private isValidDate(dateString: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Format: YYYY-MM-DD
    if (!dateString.match(dateRegex)) return false;

    const date = new Date(dateString);
    const today = new Date();
    return !isNaN(date.getTime()) && date <= today; // Ensure it's a valid date
  }
}

