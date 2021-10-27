import { TestBed } from '@angular/core/testing';

import { FeriasCallService } from './ferias-call.service';

describe('FeriasCallService', () => {
  let service: FeriasCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeriasCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
