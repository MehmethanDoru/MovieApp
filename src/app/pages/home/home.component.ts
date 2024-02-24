import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetGenresService } from 'src/app/services/get-genres.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    public getGenresService: GetGenresService
  ) {}

  onSearchBarClick() {
    this.router.navigate(['/search']);
  }
}