import 'zone.js'; // ✅ Required for Angular tests
import 'zone.js/testing'; // ✅ Ensures `ProxyZone` is available

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// ✅ Ensure Angular test environment is properly initialized
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
