import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  @Input() movieId: string | null = null;
  castList: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    if (this.movieId) {
      this.getMovieCredits(this.movieId);
    }
    console.log("movie id: " + this.movieId);
  }

  getMovieCredits(movieId: string): void {
    this.movieService.getMovieCredits(movieId).subscribe(
      (data) => {
        this.castList = data.cast;
        console.log(this.castList);
      },
      (error) => {
        console.error('Error fetching movie credits:', error);
      }
    );
  }

    // get movie profile image
    getMovieProfileUrl(backdropPath: string | null): string {
      if (backdropPath) {
        return `https://image.tmdb.org/t/p/w500${backdropPath}`;
      } else {
        return 'https://via.placeholder.com/140x210';
      }
    }

    getCastWithPhotos(): any[] {
      return this.castList.filter(castMember => castMember.profile_path !== null);
  }
  
}