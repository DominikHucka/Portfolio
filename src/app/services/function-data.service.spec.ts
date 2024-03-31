import { TestBed } from '@angular/core/testing';

import { FunctionDataService } from './function-data.service';

describe('FunctionDataService', () => {
  let service: FunctionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
