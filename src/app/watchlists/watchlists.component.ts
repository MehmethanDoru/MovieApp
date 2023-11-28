import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist.service';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'watchlists',

  templateUrl: './watchlists.component.html',
  styleUrls: ['./watchlists.component.css'],
})
export class WatchlistsComponent implements OnInit {
  watchlist: string[] = [];
  moviesList: any[] = [];

  constructor(
    private watchlistService: WatchlistService,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.watchlist = this.watchlistService.getWatchlist();
    this.getMoviesDetails();
  }

  getMoviesDetails(): void {
    // Her bir watchlist ID'si için getMovie fonksiyonunu çağır
    this.watchlist.forEach((movieId) => {
      this.movieService.getMovie(movieId).subscribe((data) => {
        // Gelen veriyi moviesList dizisine ekleyin
        this.moviesList.push(data);
      });
      console.log(this.moviesList);
    });
  }
  
  // route to detail page with id
  navigateToDetail(result: any): void {
    this.router.navigate(['/detail', result]);
  }

  getMoviePosterUrl(posterPath: string | null): string {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    } else {
      return 'https://via.placeholder.com/140x210';
    }
  }

  goToHomePage(): void {
    this.router.navigate(['/']);
  }

  sendReport(): void {
    alert("Your report has been forwarded")
  }
}
