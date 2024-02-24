import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetGenresService } from 'src/app/services/get-genres.service';
import { GetMoviesByGenreService } from 'src/app/services/get-movies-by-genre.service';

@Component({
  selector: 'category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.css'],
})
export class CategoryTabComponent implements OnInit {
  @Input() genres: any[] = [];
  selectedGenre: number | null = 28; // action id
  @Input() topMoviesGenre: any[] = [];

  constructor(
    private router: Router,
    private getGenresService: GetGenresService,
    private getMoviesByGenreService: GetMoviesByGenreService
  ) {}

  onGetMoviesByGenreClick(genreId: number | null): void {
    if (genreId !== null) {
      this.selectedGenre = genreId;

      this.getMoviesByGenreService
        .getMoviesByGenre(this.selectedGenre)
        .subscribe((data) => {
          console.log(data);
          this.topMoviesGenre = data.results;
        });
    }
  }

  ngOnInit(): void {
    // genre name
    this.getGenresService.getGenres().subscribe((data) => {
      this.genres = data.genres;
    });

    // movie according to genre
    if (this.selectedGenre !== null) {
      this.getMoviesByGenreService
        .getMoviesByGenre(this.selectedGenre)
        .subscribe((data) => {
          this.topMoviesGenre = data.results.slice(0, 12);
        });
    }
  }

  // route to detail page with id
  navigateToDetail(movieId: number): void {
    this.router.navigate(['/detail', movieId]);
  }

  getMoviePosterUrl(posterPath: string | null): string {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    } else {
      return 'https://via.placeholder.com/140x210';
    }
  }
}
