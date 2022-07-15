import { TestBed } from '@angular/core/testing';

import { ServiciogameService } from './serviciogame.service';

describe('ServiciogameService', () => {
  let service: ServiciogameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciogameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
