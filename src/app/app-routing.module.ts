import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './pages/loader/loader.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SearchComponent } from './pages/search/search.component';
import { WatchlistsComponent } from './pages/watchlists/watchlists.component';

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
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
