// import { render, screen } from '@testing-library/angular';
// import { WeatherTableComponent } from './weather-table.component';
// import { AgGridAngular } from 'ag-grid-angular';
// import { CommonModule } from '@angular/common';

// describe('WeatherTableComponent', () => {
//   it('should create the component', async () => {
//     const component = await render(WeatherTableComponent, {
//       imports: [CommonModule, AgGridAngular]
//     });

//     expect(component.fixture.componentInstance).toBeTruthy();
//   });

//   it('should have correct column definitions', async () => {
//     const component = await render(WeatherTableComponent, {
//       imports: [CommonModule, AgGridAngular]
//     });

//     const expectedColumns = [
//       { headerName: 'Date', field: 'date', sortable: true, filter: true, flex: 1 },
//       { headerName: '🌡 Avg Temperature (°C)', field: 'temperature', sortable: true, filter: true, flex: 1 },
//       { headerName: '💧 Avg Humidity (%)', field: 'humidity', sortable: true, filter: true, flex: 1 }
//     ];

//     expect(component.fixture.componentInstance.columnDefs).toEqual(expectedColumns);
//   });

//   it('should receive and display weather data', async () => {
//     const mockWeatherData = [
//       { date: '2025-03-10', temperature: 28, humidity: 75 },
//       { date: '2025-03-11', temperature: 30, humidity: 80 }
//     ];

//     await render(WeatherTableComponent, {
//       imports: [CommonModule, AgGridAngular],
//       componentProperties: { weatherData: mockWeatherData }
//     });

//     // Verify that the grid component receives the correct data
//     const componentInstance = screen.debug();
//     expect(componentInstance).toMatchSnapshot(); // Optional: Snapshot testing
//   });
// });
