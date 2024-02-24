import { Injectable } from '@angular/core';
import { MovieService } from '../access-layer/movie.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetMovieDetailsService {
  constructor(private movieService: MovieService) {}
  movieDetails: any | null = null;

  getMovieDetails(id: string): Observable<any> {
    return this.movieService.getMovie(id).pipe(
      tap((data) => {
        console.log(data)
        this.movieDetails = data;
      })
    );
  }
}
