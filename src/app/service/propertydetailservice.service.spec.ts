import { TestBed } from '@angular/core/testing';

import { PropertydetailserviceService } from './propertydetailservice.service';

describe('PropertydetailserviceService', () => {
  let service: PropertydetailserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertydetailserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
