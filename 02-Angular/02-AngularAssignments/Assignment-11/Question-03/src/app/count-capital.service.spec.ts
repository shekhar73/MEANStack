import { TestBed } from '@angular/core/testing';

import { CountCapitalService } from './count-capital.service';

describe('CountCapitalService', () => {
  let service: CountCapitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountCapitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
