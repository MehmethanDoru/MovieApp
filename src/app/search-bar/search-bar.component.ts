import { Component, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchWord: string = '';
  searchResults: any[] = [];

  @Output() searchEvent = new EventEmitter<{ word: string, results: any[]}>();

  constructor(private movieService: MovieService, private router: Router) {}

  onSearch() {
    if (this.searchWord.trim() !== '') {
      this.movieService.searchMovies(this.searchWord)
        .subscribe(results => {
          this.searchResults = results.results;
          console.log(this.searchResults);
          this.searchEvent.emit({ word: this.searchWord, results: this.searchResults });
        });
    }
  }


}
