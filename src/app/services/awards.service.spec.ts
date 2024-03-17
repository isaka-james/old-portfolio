import { TestBed } from '@angular/core/testing';

import { AwardsService } from './awards.service';

describe('AwardsService', () => {
  let service: AwardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
