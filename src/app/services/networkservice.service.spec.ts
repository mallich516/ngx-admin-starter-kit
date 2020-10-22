import { TestBed } from '@angular/core/testing';

import { NetworkserviceService } from './networkservice.service';

describe('NetworkserviceService', () => {
  let service: NetworkserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
