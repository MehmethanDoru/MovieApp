import { TestBed } from '@angular/core/testing';

import { GetMovieWatchlistService } from './get-movie-watchlist.service';

describe('GetMovieWatchlistService', () => {
  let service: GetMovieWatchlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovieWatchlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
