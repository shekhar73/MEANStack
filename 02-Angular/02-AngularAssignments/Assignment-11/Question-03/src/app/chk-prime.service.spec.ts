import { TestBed } from '@angular/core/testing';

import { ChkPrimeService } from './chk-prime.service';

describe('ChkPrimeService', () => {
  let service: ChkPrimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChkPrimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
