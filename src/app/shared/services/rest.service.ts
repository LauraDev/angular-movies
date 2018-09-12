import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    public baseUrl: string = 'http://exemple.com/API'

    constructor(
        public httpClient: HttpClient
    ) {

    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }

    private static getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
    }
    
    public get(url): Observable<any> {
        let headers = RestService.getHeaders();
        const httpOptions = {headers: headers};
        return this.httpClient
            .get<any[]>(this.baseUrl + url, httpOptions)
            .pipe (
                catchError(this.handleError('get', []))
            );
        }

    public post(url, dataToPost): Observable<any> {
        let headers = RestService.getHeaders();
        const httpOptions = {headers: headers};
        return this.httpClient
            .post(this.baseUrl + url, dataToPost, httpOptions)
            .pipe (
                catchError(this.handleError('post', []))
            );
    }

    public put(url, dataToPut) {
        let headers = RestService.getHeaders();
        const httpOptions = {headers: headers};
        return this.httpClient
            .put(this.baseUrl + url, dataToPut, httpOptions)
            .pipe (
                catchError(this.handleError('put', []))
            );
    }

    public delete(url) {
        let headers = RestService.getHeaders();
        const httpOptions = {headers: headers};
        return this.httpClient
            .delete(this.baseUrl + url, httpOptions)
            .pipe (
                catchError(this.handleError('delete', []))
            );
    }
}
