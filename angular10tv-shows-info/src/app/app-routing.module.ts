import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvshowsComponent } from './tvshows/tvshows.component';


const routes: Routes = [
  {
    path: '',
    component: TvshowsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
