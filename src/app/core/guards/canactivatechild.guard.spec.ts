import { TestBed, async, inject } from '@angular/core/testing';

import { CanactivatechildGuard } from './canactivatechild.guard';

describe('CanactivatechildGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanactivatechildGuard]
    });
  });

  it('should ...', inject([CanactivatechildGuard], (guard: CanactivatechildGuard) => {
    expect(guard).toBeTruthy();
  }));
});
