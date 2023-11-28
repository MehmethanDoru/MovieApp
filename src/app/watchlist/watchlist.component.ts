import { Component, Input, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  @Input() movieDetails: any;
  isInWatchlist: boolean = false;

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.isInWatchlist = this.watchlistService.isInWatchlist(this.movieDetails.id);
  }

  toggleWatchlist(): void {
    if (this.isInWatchlist) {
      this.watchlistService.removeFromWatchlist(this.movieDetails.id);
    } else {
      this.watchlistService.addToWatchlist(this.movieDetails.id);
    }

    this.isInWatchlist = !this.isInWatchlist;
  }
}