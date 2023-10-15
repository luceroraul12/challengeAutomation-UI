import { TestBed } from '@angular/core/testing';

import { AutomationApiServiceService } from './automation-api-service.service';

describe('AutomationApiServiceService', () => {
  let service: AutomationApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomationApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
