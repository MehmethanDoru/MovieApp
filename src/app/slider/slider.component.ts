import { Component, OnInit  } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  topMovies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.getTopMovies();
  }

  getTopMovies() {
    this.movieService.getTrend().subscribe(
      (data) => {
        this.topMovies = data.results.slice(0, 10); // Ilk 10 filmi topMovies'e atanmasi
      },
      (error) => {
        console.error('Error fetching top rated movies:', error);
      }
    );
  }

  getMoviePosterUrl(posterPath: string | null): string {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    } else {
      return 'https://via.placeholder.com/500x750';
    }
  }

  // route to detail page with id
  navigateToDetail(movieId: number): void {
    this.router.navigate(['/detail', movieId]);
  }
}
