import { Injectable } from '@angular/core';
import { WatchlistService } from '../access-layer/watchlist.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMovieWatchlistService {

  constructor(private watchlistService: WatchlistService) {}

  getWatchList(): Observable<any> {
    return new Observable(observer => {
      const watchlist = this.watchlistService.getWatchlist();
      observer.next(watchlist);
      observer.complete();
    });
  }
  
}
