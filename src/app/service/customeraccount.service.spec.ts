import { TestBed } from '@angular/core/testing';

import { CustomeraccountService } from './customeraccount.service';

describe('CustomeraccountService', () => {
  let service: CustomeraccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomeraccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
