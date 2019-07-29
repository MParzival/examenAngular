import { TestBed } from '@angular/core/testing';

import { MarqueVoitureService } from './marque-voiture.service';

describe('MarqueVoitureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarqueVoitureService = TestBed.get(MarqueVoitureService);
    expect(service).toBeTruthy();
  });
});
