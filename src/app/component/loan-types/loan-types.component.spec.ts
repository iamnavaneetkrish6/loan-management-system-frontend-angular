import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTypesComponent } from './loan-types.component';

describe('LoanTypesComponent', () => {
  let component: LoanTypesComponent;
  let fixture: ComponentFixture<LoanTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanTypesComponent]
    });
    fixture = TestBed.createComponent(LoanTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
