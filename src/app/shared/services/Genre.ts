import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestService } from './rest.service';


@Injectable()
export class GenreService {
    public endPoint: string = '/genres';

    constructor(
        public restService: RestService
    ) { }

    public getAll(): Observable<any[]> {
        return this.restService.get(this.endPoint);
    }    

    // public add(movie: Movie): Observable<Movie> {
    //     return this.restService.post(this.endPoint, movie);
    // }

    // public update(movie: Movie): Observable<any> {
    //     return this.restService.put(this.endPoint, movie);
    // }

    // public delete(movie: Movie | number): Observable<any> {
    //     const id = typeof movie === 'number' ? movie : movie.id
    //     const url = this.endPoint + '/' + id;
    //     return this.restService.delete(url);
    // }
}