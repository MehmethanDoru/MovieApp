import { Component, Input, OnInit } from '@angular/core';
import { GetMovieCreditsService } from 'src/app/services/get-movie-credits.service';

@Component({
  selector: 'cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css'],
})
export class CastComponent implements OnInit{
  @Input() castList: any[] = [];
  @Input() movieId: string | null = null;
  
  constructor(private getMovieCreditsService: GetMovieCreditsService) {}

  ngOnInit(): void {
    if (this.movieId) {
      this.getMovieCreditsService.getMovieCredits(this.movieId).subscribe((data) => {
        this.castList = data.cast;
      });
    }
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
    return this.castList.filter(
      (castMember) => castMember.profile_path !== null
    );
  }
}
