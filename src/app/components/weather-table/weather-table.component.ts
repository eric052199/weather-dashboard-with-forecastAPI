import { Component, Input } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';

interface WeatherItem {
  date: string;
  temperature: number | string;
  humidity: number | string;
}

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.css'],
  standalone: true,
  imports: [CommonModule, AgGridAngular]
})

export class WeatherTableComponent {
  @Input() weatherData: WeatherItem[] = [];

  columnDefs: ColDef[] = [
    { headerName: 'Date', field: 'date', sortable: true, filter: true, flex: 1 },
    { headerName: '🌡 Avg Temperature (°C)', field: 'temperature', sortable: true, filter: true, flex: 1 },
    { headerName: '💧 Avg Humidity (%)', field: 'humidity', sortable: true, filter: true, flex: 1 }
  ];
}
