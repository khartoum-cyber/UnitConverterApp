import { TestBed } from '@angular/core/testing';

import { Conversion } from './conversion.service';

describe('Conversion', () => {
  let service: Conversion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Conversion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
