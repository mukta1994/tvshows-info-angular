import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';


import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { DetailsComponent } from './details/details.component';
import { DialogDataExampleDialog } from './season-episodes/season-episodes.component';
import { MaterialElevationDirective } from './material-elevation.directive';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SeasonEpisodesComponent } from './season-episodes/season-episodes.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { GridDataComponent } from './grid-data/grid-data.component';
import { FilterPipe } from './filters/filter.pipe';
import { MinuteToHoursPipe } from './filters/minute-to-hours.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    DetailsComponent,
    MaterialElevationDirective,
    DialogDataExampleDialog, SeasonEpisodesComponent, TvShowsComponent, GridDataComponent,FilterPipe, MinuteToHoursPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    InfiniteScrollModule,
    CommonModule,
    MatInputModule,
    NgbModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
