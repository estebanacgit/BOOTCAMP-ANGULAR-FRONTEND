import { TestBed } from '@angular/core/testing';

import { AssessService } from './assess.service';

describe('AssessService', () => {
  let service: AssessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
