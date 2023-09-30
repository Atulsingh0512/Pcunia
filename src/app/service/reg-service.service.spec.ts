import { TestBed } from '@angular/core/testing';

import { RegServiceService } from './reg-service.service';

describe('RegServiceService', () => {
  let service: RegServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
