import { TestBed } from '@angular/core/testing';

import { GetTopMoviesService } from './get-top-movies.service';

describe('GetTopMoviesService', () => {
  let service: GetTopMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTopMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
