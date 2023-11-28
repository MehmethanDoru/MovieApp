import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './slider/slider.component';
import { register } from 'swiper/element/bundle';
import { HttpClientModule } from '@angular/common/http';
import { CategoryTabComponent } from './category-tab/category-tab.component';
import { DetailComponent } from './detail/detail.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { AboutMoviesComponent } from './about-movies/about-movies.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CastComponent } from './cast/cast.component';
import { FormsModule} from '@angular/forms';
import { NoResultComponent } from './no-result/no-result.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchlistService } from './watchlist.service';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { EmptyWathclistComponent } from './empty-wathclist/empty-wathclist.component';

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
  providers: [WatchlistService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
