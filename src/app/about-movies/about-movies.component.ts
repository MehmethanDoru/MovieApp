import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-movies',
  templateUrl: './about-movies.component.html',
  styleUrls: ['./about-movies.component.css']
})
export class AboutMoviesComponent {
  @Input() movie: any;
}
