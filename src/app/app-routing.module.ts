import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';

const routes: Routes = [
  { path: 'loader', component: LoaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'search', component: SearchComponent },
  { path: 'watchlists', component: WatchlistsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
