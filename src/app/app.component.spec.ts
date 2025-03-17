import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent], // ✅ Ensures component is properly declared
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // ✅ Ensures component lifecycle runs
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
