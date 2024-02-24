import { TestBed } from '@angular/core/testing';

import { GetMovieDetailsService } from './get-movie-details.service';

describe('GetMovieDetailsService', () => {
  let service: GetMovieDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovieDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
