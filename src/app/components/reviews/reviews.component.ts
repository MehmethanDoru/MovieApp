import { Component, Input, OnInit } from '@angular/core';
import { GetReviewsService } from 'src/app/services/get-reviews.service';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  @Input() movieReviews: any[] = [];
  @Input() movieId: string | null = null;

  constructor(private getReviewsService: GetReviewsService) {}

  ngOnInit(): void {
        if (this.movieId) {
      this.getReviewsService.getReviews(this.movieId).subscribe((data) => {
        console.log(data);
        this.movieReviews = data.results;
      });
    }
  }
}
