import { TestBed } from '@angular/core/testing';

import { PersonalinfoService } from './personalinfo.service';

describe('PersonalinfoService', () => {
  let service: PersonalinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
