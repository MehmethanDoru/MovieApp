import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMovieDetailsService } from 'src/app/services/get-movie-details.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  movieId: string | null = null;
  movieDetails: any | null = null;
  tabMenus: any[] = [
    { id: 'aboutMovies', label: 'About Movies' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'cast', label: 'Cast' },
  ];
  selectedTabMenu: string | null = 'aboutMovies';
  selectedTabContent: string = 'about-movies';
  sliderValue: number = 5;

  constructor(
    private route: ActivatedRoute,
    private getMovieDetailsService: GetMovieDetailsService
  ) {}

  ngOnInit(): void {
    // get id from url with activated route
    this.route.paramMap.subscribe((params) => {
      this.movieId = params.get('id');
      console.log('ID: ', this.movieId);
      if (this.movieId) {
        this.getMovieDetails(this.movieId);
      }
    });
  }

  getMovieDetails(id: string): void {
    this.getMovieDetailsService.getMovieDetails(id).subscribe((data) => {
      this.movieDetails = data;
    });
  }

  // get movie backdrop image
  getMovieBackdropUrl(backdropPath: string | null): string {
    if (backdropPath) {
      return `https://image.tmdb.org/t/p/w500${backdropPath}`;
    } else {
      return 'https://via.placeholder.com/140x210';
    }
  }

  // get movie poster image
  getMoviePosterUrl(posterPath: string | null): string {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    } else {
      return 'https://via.placeholder.com/140x210';
    }
  }

  selectTab(tabId: string): void {
    this.selectedTabMenu = tabId;
    switch (tabId) {
      case 'aboutMovies':
        this.selectedTabContent = 'about-movies';
        break;
      case 'reviews':
        this.selectedTabContent = 'reviews';
        break;
      case 'cast':
        this.selectedTabContent = 'cast';
        break;
      default:
        this.selectedTabContent = 'about-movies';
        break;
    }
  }

  showRateSection: boolean = false;

  // RATE
  onRatePage(): any {
    this.showRateSection = true;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('blur-effect');
  }

  closeRateSection(): void {
    this.showRateSection = false;
    document.body.style.overflow = 'auto';
    document.body.classList.remove('blur-effect');
  }

  closeRate() {
    this.showRateSection = false;
    document.body.style.overflow = 'auto';
  }

  okRate() {
    alert('Your vote has been confirmed');
    this.showRateSection = false;
    document.body.style.overflow = 'auto';
  }
}
