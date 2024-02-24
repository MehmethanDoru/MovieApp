import { Injectable } from '@angular/core';
import { MovieService } from '../access-layer/movie.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchMovieService {
  constructor(private movieService: MovieService) {}
  private searchWord: string | any;
  private searchResults: any[] = [];

  getSearchMovies(word: string): Observable<any> {
    this.searchWord = word;
    return this.movieService.searchMovies(this.searchWord).pipe(
      tap((results) => {
        this.searchResults = results.results;
      })
    );
  }
}
