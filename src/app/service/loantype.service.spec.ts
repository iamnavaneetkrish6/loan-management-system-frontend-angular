import { TestBed } from '@angular/core/testing';

import { LoantypeService } from './loantype.service';

describe('LoantypeService', () => {
  let service: LoantypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoantypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
