import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6O2ChartComponent } from './ng6-o2-chart.component';

describe('Ng6O2ChartComponent', () => {
  let component: Ng6O2ChartComponent;
  let fixture: ComponentFixture<Ng6O2ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng6O2ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6O2ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
