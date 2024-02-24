import { TestBed } from '@angular/core/testing';

import { GetMovieCreditsService } from './get-movie-credits.service';

describe('GetMovieCreditsService', () => {
  let service: GetMovieCreditsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovieCreditsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
