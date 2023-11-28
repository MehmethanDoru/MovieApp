import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.css'],
})
export class CategoryTabComponent implements OnInit {
  genres: any[] = [];
  selectedGenre: number | null = 28; // action id
  topMoviesGenre: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.getGenres();
    this.getMoviesByGenre(28); // start with action category
  }

  getGenres(): void {
    this.movieService.getGenres().subscribe(
      (data) => {
        this.genres = data.genres;
      },
      (error) => {
        console.error('Error fetching genres:', error);
      }
    );
  }

  selectGenre(genreId: number): void {
    this.selectedGenre = genreId;
    this.getMoviesByGenre(genreId);
  }

  getMoviesByGenre(genreId: number): void {
    this.movieService.getMoviesByGenre(genreId.toString()).subscribe((data) => {
      this.topMoviesGenre = data.results.slice(0, 12);
    });

    console.log(this.topMoviesGenre);
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
