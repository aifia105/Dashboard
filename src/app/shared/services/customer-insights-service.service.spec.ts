import { TestBed } from '@angular/core/testing';

import { CustomerInsightsServiceService } from './customer-insights-service.service';

describe('CustomerInsightsServiceService', () => {
  let service: CustomerInsightsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerInsightsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
