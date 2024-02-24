import { Component, Input } from '@angular/core';
import { GetMovieWatchlistService } from 'src/app/services/get-movie-watchlist.service';
import { WatchlistService } from 'src/app/access-layer/watchlist.service';

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent {
  @Input() movieDetails: any;
  @Input() isInWatchlist: boolean = false;
  watchlist: string[] = [];


  constructor(private getMovieWatchlistService: GetMovieWatchlistService,
    private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    console.log('deneme');
    this.getWatchList();
  }

  getWatchList() {
    this.getMovieWatchlistService.getWatchList().subscribe((watchlist) => {
      this.watchlist = watchlist;
          if (this.movieDetails) {
            this.isInWatchlist = this.watchlistService.isInWatchlist(this.movieDetails.id);
        }
      console.log('deneme2321', watchlist);
    });
  }

  toggleWatchlist() {
    if (this.isInWatchlist) {
      this.watchlistService.removeFromWatchlist(this.movieDetails.id);
    } else {
      this.watchlistService.addToWatchlist(this.movieDetails.id);
    }
    this.isInWatchlist = !this.isInWatchlist;
  }
}
