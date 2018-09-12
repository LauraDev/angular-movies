import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

const moviesRoutes: Routes = [
    { path: 'movie/new', component: MovieEditComponent},
    { path: 'movie/edit/:id', component: MovieEditComponent},
    { path: 'movie/:id', component: MovieCardComponent}

];
@NgModule({
    imports: [
        RouterModule.forChild(moviesRoutes)
    ],
    exports: [
        RouterModule 
    ]
})
export class MoviesRoutingModule { }