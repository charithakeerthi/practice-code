import { TestBed } from '@angular/core/testing';

import { OtherserviceService } from './otherservice.service';

describe('OtherserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtherserviceService = TestBed.get(OtherserviceService);
    expect(service).toBeTruthy();
  });
});
