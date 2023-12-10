import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpropertydetailComponent } from './addpropertydetail.component';

describe('AddpropertydetailComponent', () => {
  let component: AddpropertydetailComponent;
  let fixture: ComponentFixture<AddpropertydetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpropertydetailComponent]
    });
    fixture = TestBed.createComponent(AddpropertydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
