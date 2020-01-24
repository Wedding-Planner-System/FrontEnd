import { TestBed } from '@angular/core/testing';

import { AppStartService } from './app-start.service';

describe('AppStartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppStartService = TestBed.get(AppStartService);
    expect(service).toBeTruthy();
  });
});
