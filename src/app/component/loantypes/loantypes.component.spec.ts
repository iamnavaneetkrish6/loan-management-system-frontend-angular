import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoantypesComponent } from './loantypes.component';

describe('LoantypesComponent', () => {
  let component: LoantypesComponent;
  let fixture: ComponentFixture<LoantypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoantypesComponent]
    });
    fixture = TestBed.createComponent(LoantypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
