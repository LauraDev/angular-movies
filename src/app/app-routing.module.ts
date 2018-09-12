import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { MovieListComponent } from './pages/movies/movie-list/movie-list.component';
import { SerieListComponent } from './pages/series/serie-list/serie-list.component';

const appRoutes: Routes = [
    { path: 'series', component: SerieListComponent},
    { path: 'movies', component: MovieListComponent},
    { path: '', redirectTo: 'movies', pathMatch: 'full'}
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } 
        )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}