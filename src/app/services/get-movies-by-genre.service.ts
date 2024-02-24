import { Injectable } from '@angular/core';
import { MovieService } from '../access-layer/movie.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesByGenreService {
  topMoviesGenre: any[] = [];

  constructor(private movieService: MovieService) {}

  getMoviesByGenre(genreId: number): Observable<any> {
    console.log('Getting movies by genre with ID:', genreId);

    return this.movieService.getMoviesByGenre(genreId.toString()).pipe(
      tap((data) => {
        this.topMoviesGenre = data.results.slice(0, 12);
      })
    );
  }
}
