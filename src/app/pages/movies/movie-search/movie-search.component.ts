import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { Observable, Subject } from 'rxjs';
import { MovieService } from '../../../shared/services/Movie';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-movie-search',
    templateUrl: './movie-search.component.html',
    styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

    public movies$: Observable<Movie[]>;
    private searchTerms = new Subject<string>();

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.movies$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.movieService.searchMovies(term))
        );
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }
    
}
