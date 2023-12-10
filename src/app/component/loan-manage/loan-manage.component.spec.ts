import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanManageComponent } from './loan-manage.component';

describe('LoanManageComponent', () => {
  let component: LoanManageComponent;
  let fixture: ComponentFixture<LoanManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanManageComponent]
    });
    fixture = TestBed.createComponent(LoanManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
