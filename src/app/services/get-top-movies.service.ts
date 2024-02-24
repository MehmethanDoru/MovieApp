import { Injectable } from '@angular/core';
import { MovieService } from '../access-layer/movie.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTopMoviesService {
  private topMovies: any[] = []; 

  constructor(private movieService: MovieService) { }

  getTopMovies(): Observable<any> {
    return this.movieService.getTrend().pipe(
      tap((data) => {
        this.topMovies = data.results.slice(0, 10);
      })
    );
  }
}
