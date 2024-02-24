import { TestBed } from '@angular/core/testing';

import { GetGenresService } from './get-genres.service';

describe('GetGenresService', () => {
  let service: GetGenresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGenresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
