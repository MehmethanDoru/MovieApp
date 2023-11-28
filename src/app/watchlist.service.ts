import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private watchlistKey = 'myWatchlist';

  getWatchlist(): string[] {
    const watchlistStr = localStorage.getItem(this.watchlistKey);
    return watchlistStr ? JSON.parse(watchlistStr) : [];
  }

  addToWatchlist(item: string): void {
    const watchlist = this.getWatchlist();

    if (!watchlist.includes(item)) {
      watchlist.push(item);
      localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
    }
  }

  removeFromWatchlist(item: string): void {
    const watchlist = this.getWatchlist().filter((i) => i !== item);
    localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
  }

  isInWatchlist(item: string): boolean {
    const watchlist = this.getWatchlist();
    return watchlist.includes(item);
  }
}
