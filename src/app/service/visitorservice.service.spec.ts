import { TestBed } from '@angular/core/testing';

import { VisitorserviceService } from './visitorservice.service';

describe('VisitorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitorserviceService = TestBed.get(VisitorserviceService);
    expect(service).toBeTruthy();
  });
});
