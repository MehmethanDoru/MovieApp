import { Component, Input, OnInit } from '@angular/core';
import { GetMovieDetailsService } from 'src/app/services/get-movie-details.service';

@Component({
  selector: 'about-movies',
  templateUrl: './about-movies.component.html',
  styleUrls: ['./about-movies.component.css'],
})
export class AboutMoviesComponent implements OnInit {
  @Input() movie: any;
  @Input() movieId: string | null = null;

  constructor(private getMovieDetailsService: GetMovieDetailsService) {}

  ngOnInit(): void {
    console.log('ID - about: ', this.movieId);
    if (this.movieId) {
      this.getMovieDetailsService
        .getMovieDetails(this.movieId)
        .subscribe((data) => {
          console.log('data', data.overview);
          this.movie = data.overview;
        });
    }
  }

}
