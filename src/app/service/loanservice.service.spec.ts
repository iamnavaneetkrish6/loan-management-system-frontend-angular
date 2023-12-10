import { TestBed } from '@angular/core/testing';

import { LoanserviceService } from './loanservice.service';

describe('LoanserviceService', () => {
  let service: LoanserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
