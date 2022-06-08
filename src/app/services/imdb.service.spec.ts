import { TestBed } from '@angular/core/testing';

import { ImdbService } from './imdb.service';

describe('ImdbService', () => {
  let service: ImdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
