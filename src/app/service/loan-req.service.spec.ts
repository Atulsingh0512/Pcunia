import { TestBed } from '@angular/core/testing';

import { LoanReqService } from './loan-req.service';

describe('LoanReqService', () => {
  let service: LoanReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
