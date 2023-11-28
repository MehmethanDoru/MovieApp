import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMoviesComponent } from './about-movies.component';

describe('AboutMoviesComponent', () => {
  let component: AboutMoviesComponent;
  let fixture: ComponentFixture<AboutMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMoviesComponent]
    });
    fixture = TestBed.createComponent(AboutMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
