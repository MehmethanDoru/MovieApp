import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetMovieDetailsService } from 'src/app/services/get-movie-details.service';
import { GetMovieWatchlistService } from 'src/app/services/get-movie-watchlist.service';

@Component({
  selector: 'watchlists',
  templateUrl: './watchlists.component.html',
  styleUrls: ['./watchlists.component.css'],
})
export class WatchlistsComponent implements OnInit {
  watchlist: string[] = [];
  moviesList: any[] = [];

  constructor(
    private router: Router,
    private getMovieDetailsService: GetMovieDetailsService,
    private getMovieWatchlistService: GetMovieWatchlistService
  ) {}

  ngOnInit(): void {
    this.getMovieWatchlistService.getWatchList().subscribe((watchlist) => {
      this.watchlist = watchlist;
    });
    this.getMoviesDetails();
  }

  getMoviesDetails(): void {
    this.watchlist.forEach((movieId) => {
      this.getMovieDetailsService.getMovieDetails(movieId).subscribe((data) => {
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
    alert('Your report has been forwarded');
  }
}
