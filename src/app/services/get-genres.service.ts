import { Injectable } from '@angular/core';
import { MovieService } from '../access-layer/movie.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetGenresService {
  private genres: any[] = [];

  constructor(private movieService: MovieService) { }

  getGenres(): Observable<any> {
    return this.movieService.getGenres().pipe(
      tap((data) => {
        this.genres = data; // Veriyi değişkene ata
      })
    );
  }

  // getGenresData(): any {
  //   return this.genres; // Dönen veriyi dışarıya aç
  // }
}
