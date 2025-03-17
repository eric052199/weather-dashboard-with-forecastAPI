// import { render, screen } from '@testing-library/angular';
// import { WeatherChartComponent } from './weather-chart.component';
// import { HighchartsChartModule } from 'highcharts-angular';
// import { CommonModule } from '@angular/common';

// describe('WeatherChartComponent', () => {
//   it('should create the component', async () => {
//     const { fixture } = await render(WeatherChartComponent, {
//       imports: [CommonModule, HighchartsChartModule],
//       componentProperties: {
//         weatherData: [
//           { date: '2025-03-10', temperature: 28, humidity: 75 },
//           { date: '2025-03-11', temperature: 26, humidity: 80 },
//         ],
//       },
//     });

//     expect(fixture.componentInstance).toBeTruthy();
//   });

//   it('should set chart options when weather data changes', async () => {
//     const { fixture } = await render(WeatherChartComponent, {
//       imports: [CommonModule, HighchartsChartModule],
//       componentProperties: {
//         weatherData: [
//           { date: '2025-03-10', temperature: 28, humidity: 75 },
//           { date: '2025-03-11', temperature: 26, humidity: 80 },
//         ],
//       },
//     });

//     expect(fixture.componentInstance.chartOptions).toBeDefined();
//     expect(fixture.componentInstance.chartOptions.series.length).toBe(2);
//     expect(fixture.componentInstance.chartOptions.series[0].data).toEqual([
//       28, 26,
//     ]);
//     expect(fixture.componentInstance.chartOptions.series[1].data).toEqual([
//       75, 80,
//     ]);
//   });

//   it('should render chart title', async () => {
//     await render(WeatherChartComponent, {
//       imports: [CommonModule, HighchartsChartModule],
//       componentProperties: {
//         weatherData: [{ date: '2025-03-10', temperature: 28, humidity: 75 }],
//       },
//     });

//     expect(screen.getByText('📈 Temperature & Humidity Trends')).toBeTruthy();
//   });
// });
