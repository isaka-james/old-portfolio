import { TestBed } from '@angular/core/testing';

import { ServiceOfferedService } from './service-offered.service';

describe('ServiceOfferedService', () => {
  let service: ServiceOfferedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOfferedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
