import { TestBed } from '@angular/core/testing';

import { VendordataService } from './vendordata.service';

describe('VendordataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendordataService = TestBed.get(VendordataService);
    expect(service).toBeTruthy();
  });
});
