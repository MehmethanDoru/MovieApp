import { Injectable } from '@angular/core';
import { MovieService } from '../access-layer/movie.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMovieCreditsService {
  private castList: any[] = [];

  constructor(private movieService: MovieService) {}
  
  getMovieCredits(movieId: string): Observable<any> {
    return this.movieService.getMovieCredits(movieId).pipe(
      tap((data) => {
        this.castList = data.cast;
      })
    );
  }
}
