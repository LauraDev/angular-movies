import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';

import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
    declarations: [
        MovieCardComponent,
        MovieListComponent,
        MovieEditComponent,
        MovieSearchComponent
    ],
    imports: [
    BrowserModule,
        FormsModule,
        SharedModule,
        MoviesRoutingModule
    ],
    providers: [],
})
export class MoviesModule {}