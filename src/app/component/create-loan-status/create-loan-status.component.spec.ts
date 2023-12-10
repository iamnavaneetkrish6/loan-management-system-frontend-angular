import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoanStatusComponent } from './create-loan-status.component';

describe('CreateLoanStatusComponent', () => {
  let component: CreateLoanStatusComponent;
  let fixture: ComponentFixture<CreateLoanStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLoanStatusComponent]
    });
    fixture = TestBed.createComponent(CreateLoanStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
