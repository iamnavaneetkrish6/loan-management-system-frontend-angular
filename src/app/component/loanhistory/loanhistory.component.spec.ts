import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanhistoryComponent } from './loanhistory.component';

describe('LoanhistoryComponent', () => {
  let component: LoanhistoryComponent;
  let fixture: ComponentFixture<LoanhistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanhistoryComponent]
    });
    fixture = TestBed.createComponent(LoanhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
