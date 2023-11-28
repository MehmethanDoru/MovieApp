import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchWord: string = '';
  searchResults: any[] = [];
  detailResults: any[] = [];

  constructor(private router: Router, private movieService: MovieService) {}

  onSearchEvent(event: { word: string; results: any[] }) {
    this.searchWord = event.word;
    this.searchResults = event.results;

    this.searchResults.forEach((result) => this.navigateToMovie(result));
  }

  getMoviePosterUrl(posterPath: string | null): string {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    } else {
      return 'https://via.placeholder.com/500x750';
    }
  }

  navigateToMovie(result: any): void {
    this.movieService.getMovie(result.id).subscribe((details) => {
      result.id = details.id;
      result.genre = details.genres[0].name;
      result.runtime = details.runtime;
    });
  }

  // route to detail page with id
  navigateToDetail(result: any): void {
    this.movieService.getMovie(result.id).subscribe((details) => {
      const resultIndex = this.searchResults.findIndex(
        (result) => result.id === result.id
      );
      if (resultIndex !== -1) {
        this.searchResults[resultIndex].details = details;
      }
    });
    this.router.navigate(['/detail', result]);
  }

    goToHomePage(): void {
      this.router.navigate(['/']);
    }

    sendReport(): void {
      alert("Your report has been forwarded")
    }
}
