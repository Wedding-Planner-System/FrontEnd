import { TestBed } from '@angular/core/testing';

import { EventregisterService } from './eventregister.service';

describe('EventregisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventregisterService = TestBed.get(EventregisterService);
    expect(service).toBeTruthy();
  });
});
