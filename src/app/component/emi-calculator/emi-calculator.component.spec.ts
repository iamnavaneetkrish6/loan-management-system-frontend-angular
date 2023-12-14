import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCalculatorComponent } from './emi-calculator.component';

describe('EmiCalculatorComponent', () => {
  let component: EmiCalculatorComponent;
  let fixture: ComponentFixture<EmiCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmiCalculatorComponent]
    });
    fixture = TestBed.createComponent(EmiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
