import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { DetailsComponent } from './details/details.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';


const routes: Routes = [
  {
    path: '',
    component: TvShowsComponent ,pathMatch:"full"
  },
  {
    path: 'results/:query',
    component: SearchResultsComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent,pathMatch:"full"
  },
  {
    path: 'tv',
    component: SearchComponent,pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
