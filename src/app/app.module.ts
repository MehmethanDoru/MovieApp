import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchComponent } from './pages/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { register } from 'swiper/element/bundle';
import { HttpClientModule } from '@angular/common/http';
import { CategoryTabComponent } from './components/category-tab/category-tab.component';
import { DetailComponent } from './pages/detail/detail.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { AboutMoviesComponent } from './components/about-movies/about-movies.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CastComponent } from './components/cast/cast.component';
import { FormsModule} from '@angular/forms';
import { NoResultComponent } from './components/no-result/no-result.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { WatchlistService } from './access-layer/watchlist.service';
import { WatchlistsComponent } from './pages/watchlists/watchlists.component';
import { EmptyWathclistComponent } from './components/empty-wathclist/empty-wathclist.component';
import { SearchMovieService } from './services/search-movie.service';


register();

@NgModule({
  declarations: [
    AppComponent,
    TabbarComponent,
    HeaderComponent,
    LoaderComponent,
    HomeComponent,
    SearchBarComponent,
    SearchComponent,
    SliderComponent,
    CategoryTabComponent,
    DetailComponent,
    TimeFormatPipe,
    AboutMoviesComponent,
    ReviewsComponent,
    CastComponent,
    NoResultComponent,
    WatchlistComponent,
    WatchlistsComponent,
    EmptyWathclistComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [WatchlistService,SearchMovieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
