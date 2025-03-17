// import { TestBed } from '@angular/core/testing';
// import { WeatherService } from './weather.service';
// import { HttpClient } from '@angular/common/http';
// import { of } from 'rxjs';

// jest.mock('@angular/common/http');

// describe('WeatherService', () => {
//   let service: WeatherService;
//   let httpClientMock: jest.Mocked<HttpClient>;

//   beforeEach(() => {
//     httpClientMock = {
//       get: jest.fn(),
//     } as unknown as jest.Mocked<HttpClient>;

//     TestBed.configureTestingModule({
//       providers: [{ provide: HttpClient, useValue: httpClientMock }],
//     });

//     service = TestBed.inject(WeatherService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should call the API 30 times with correct date parameters', () => {
//     const selectedDate = '2025-03-10';
//     const expectedDates = [];

//     let currentDate = new Date(selectedDate);
//     currentDate.setDate(currentDate.getDate() - 2);

//     for (let i = 0; i < 30; i++) {
//       expectedDates.push(currentDate.toISOString().split('T')[0]);
//       currentDate.setDate(currentDate.getDate() - 1);
//     }

//     httpClientMock.get.mockReturnValue(of({ items: [] }));

//     service.getForecastData(selectedDate).subscribe();

//     expect(httpClientMock.get).toHaveBeenCalledTimes(30);
//     expectedDates.forEach((date) => {
//       expect(httpClientMock.get).toHaveBeenCalledWith(
//         `https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=${date}`
//       );
//     });
//   });

//   it('should process forecast data correctly', () => {
//     const mockResponses = [
//       {
//         items: [
//           {
//             forecasts: [
//               {
//                 date: '2025-03-08',
//                 temperature: { low: 25, high: 30 },
//                 relative_humidity: { low: 60, high: 80 },
//               },
//             ],
//           },
//         ],
//       },
//       {
//         items: [
//           {
//             forecasts: [
//               {
//                 date: '2025-03-07',
//                 temperature: { low: 22, high: 27 },
//                 relative_humidity: { low: 50, high: 70 },
//               },
//             ],
//           },
//         ],
//       },
//     ];

//     httpClientMock.get.mockReturnValueOnce(of(mockResponses[0]));
//     httpClientMock.get.mockReturnValueOnce(of(mockResponses[1]));

//     service.getForecastData('2025-03-10').subscribe((data) => {
//       expect(data).toEqual([
//         { date: '2025-03-08', temperature: 27.5, humidity: 70 },
//         { date: '2025-03-07', temperature: 24.5, humidity: 60 },
//       ]);
//     });
//   });

//   it('should return empty array if API response is empty', () => {
//     httpClientMock.get.mockReturnValue(of({ items: [] }));

//     service.getForecastData('2025-03-10').subscribe((data) => {
//       expect(data).toEqual([]);
//     });
//   });

//   it('should handle errors gracefully and return empty array', () => {
//     httpClientMock.get.mockImplementation(() => {
//       throw new Error('API Error');
//     });

//     service.getForecastData('2025-03-10').subscribe((data) => {
//       expect(data).toEqual([]);
//     });
//   });
// });
