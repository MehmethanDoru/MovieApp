import { Injectable } from '@angular/core';
import { MovieService } from '../access-layer/movie.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetReviewsService {
  private movieReviews: any[] = [];

  constructor(private movieService: MovieService) {}

  getReviews(movieId: string): Observable<any> {
    return this.movieService.getMovieReviews(movieId).pipe(
      tap((data) => {
        this.movieReviews = data.results;
      })
    );
  }
}
