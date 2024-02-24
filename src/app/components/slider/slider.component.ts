import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetTopMoviesService } from 'src/app/services/get-top-movies.service';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() topMovies: any[] = [];

  constructor(
    private router: Router,
    private getTopMoviesService: GetTopMoviesService
  ) {}

  ngOnInit(): void {
    this.getTopMoviesService.getTopMovies().subscribe((data) => {
      console.log(data.results.slice(0, 10));

      this.topMovies = data.results.slice(0, 10);
    });
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
