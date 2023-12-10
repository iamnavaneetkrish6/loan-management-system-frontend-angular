import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccountdetailComponent } from './addaccountdetail.component';

describe('AddaccountdetailComponent', () => {
  let component: AddaccountdetailComponent;
  let fixture: ComponentFixture<AddaccountdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddaccountdetailComponent]
    });
    fixture = TestBed.createComponent(AddaccountdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
