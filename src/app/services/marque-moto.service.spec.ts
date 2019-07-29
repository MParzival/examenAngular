import { TestBed } from '@angular/core/testing';

import { MarqueMotoService } from './marque-moto.service';

describe('MarqueMotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarqueMotoService = TestBed.get(MarqueMotoService);
    expect(service).toBeTruthy();
  });
});
