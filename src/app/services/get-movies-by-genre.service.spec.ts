import { TestBed } from '@angular/core/testing';

import { GetMoviesByGenreService } from './get-movies-by-genre.service';

describe('GetMoviesByGenreService', () => {
  let service: GetMoviesByGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMoviesByGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
