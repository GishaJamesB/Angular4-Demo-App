import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { House } from './house';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class HouseService {
  private houseUrl = 'https://www.anapioficeandfire.com/api/houses';

  constructor(private http: HttpClient) { }

   /** GET houses from the server */
  getHouses (): Observable<House[]> {
    return this.http.get<House[]>(this.houseUrl)
      .pipe(
        catchError(this.handleError('getHouses', []))
      );
  }

  /** GET house by id. Return `undefined` when id not found */
  getHouseNo404<Data>(id: number): Observable<House> {
    const url = `${this.houseUrl}/${id}`;
    return this.http.get<House[]>(url)
      .pipe(
        map(houses => houses[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<House>(`getHouse id=${id}`))
      );
  }

  /** GET house by id. Will 404 if id not found */
  getHouse(id: number): Observable<House> {
    const url = `${this.houseUrl}/${id}`;
    return this.http.get<House>(url).pipe(
      catchError(this.handleError<House>(`getHouse id=${id}`))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
