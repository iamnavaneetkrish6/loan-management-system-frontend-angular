import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageloanComponent } from './manageloan.component';

describe('ManageloanComponent', () => {
  let component: ManageloanComponent;
  let fixture: ComponentFixture<ManageloanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageloanComponent]
    });
    fixture = TestBed.createComponent(ManageloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
