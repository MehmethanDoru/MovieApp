import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'e352109dfe44d5dc64e16acab1384325';
  private baseUrl = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  searchMovies(searchStr: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}`);
  }

  getTrend() : Observable<any> {
    return this.http.get(`${this.baseUrl}trending/movie/day?api_key=${this.apiKey}&language=en-EN`)
  }

  getPopular(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}`);
  }

  getUpComingMovies(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&page=${page}`);
  }

  getTopRatedMovies(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}`);
  }

  getDiscoverMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}`);
  }

  getMoviesByGenre(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/${id}/movies?api_key=${this.apiKey}`);
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieReviews(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/reviews?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getBackdropsImages(id: string) {
    return this.http.get(`${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`);
  }

  getPersonDetail(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}?api_key=${this.apiKey}`);
  }
}
