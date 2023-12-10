import { TestBed } from '@angular/core/testing';

import { LoaninformationService } from './loaninformation.service';

describe('LoaninformationService', () => {
  let service: LoaninformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaninformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
