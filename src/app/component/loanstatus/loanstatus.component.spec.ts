import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanstatusComponent } from './loanstatus.component';

describe('LoanstatusComponent', () => {
  let component: LoanstatusComponent;
  let fixture: ComponentFixture<LoanstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanstatusComponent]
    });
    fixture = TestBed.createComponent(LoanstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
