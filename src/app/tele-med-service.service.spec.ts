import { TestBed } from '@angular/core/testing';

import { TeleMedServiceService } from './tele-med-service.service';

describe('TeleMedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeleMedServiceService = TestBed.get(TeleMedServiceService);
    expect(service).toBeTruthy();
  });
});
