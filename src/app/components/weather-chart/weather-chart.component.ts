import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule]
})
export class WeatherChartComponent implements OnChanges {
  @Input() weatherData: any[] = [];
  highcharts = Highcharts;
  chartOptions: any;

  ngOnChanges() {
    this.chartOptions = {
      chart: { type: 'line', backgroundColor: '#f9f9f9' },
      title: { text: '📈 Temperature & Humidity Trends', style: { fontSize: '18px' } },
      xAxis: { 
        categories: this.weatherData.map(d => d.date), 
        labels: { rotation: -45, style: { fontSize: '12px' } } 
      },
      yAxis: [
        { title: { text: 'Temperature (°C)' }, labels: { style: { fontSize: '12px' } } },
        { title: { text: 'Humidity (%)' }, opposite: true, labels: { style: { fontSize: '12px' } } }
      ],
      series: [
        { name: 'Temperature', data: this.weatherData.map(d => d.temperature), type: 'line', color: '#007bff' },
        { name: 'Humidity', data: this.weatherData.map(d => d.humidity), type: 'line', yAxis: 1, color: '#6f42c1' }
      ],
      credits: { enabled: false }
    };
  }
}
