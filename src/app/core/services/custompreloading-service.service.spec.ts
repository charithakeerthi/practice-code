import { TestBed } from '@angular/core/testing';

import { CustompreloadingServiceService } from './custompreloading-service.service';

describe('CustompreloadingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustompreloadingServiceService = TestBed.get(CustompreloadingServiceService);
    expect(service).toBeTruthy();
  });
});
