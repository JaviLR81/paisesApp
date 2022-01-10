import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url: string = 'https://restcountries.com/v2';

  get httpParams () {
    // const params = new Httpparams
    return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }

  constructor(private http: HttpClient) { }

  // Con llaves cuadradas por que devuelve un arreglo
  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.api_url}/name/${termino}`;
    return this.http.get<Country[]>(url);
    // .pipe(
    // Catch the error and return and empty array
    //   catchError( err =>  of([]))
    // );
  }


  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.api_url}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha(id: string): Observable<Country>{
    const url = `${this.api_url}/alpha/${id}`;
    return this.http.get<Country>(url);
  }


  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.api_url }/regionalbloc/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
            .pipe(
              tap( console.log )
            )
  }


}
