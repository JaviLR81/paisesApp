import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<any>{

    const url = `${this.api_url}/name/${termino}`;
    return this.http.get(url);
    // .pipe(
    // Catch the error and return and empty array
    //   catchError( err =>  of([]))
    // );
  }


}
