import { TestBed, async, inject } from '@angular/core/testing';

import { DeactivateformGuard } from './deactivateform.guard';

describe('DeactivateformGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivateformGuard]
    });
  });

  it('should ...', inject([DeactivateformGuard], (guard: DeactivateformGuard) => {
    expect(guard).toBeTruthy();
  }));
});
