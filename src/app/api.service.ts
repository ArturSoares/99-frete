import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, tap } from 'rxjs/operators';

export class Frete {
  cep: number;
  mensagem: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi = 'http://localhost:8080/analisa_cep/';

  fret: Frete;

  constructor(private httpClient: HttpClient) { }

  consultaFrete(cep) {
    return this.httpClient.get<Frete>(`${this.urlApi}${cep}`).pipe(
      tap(frete => console.log(`frete retrieved! ${frete}`)),
      catchError(this.handleError<Frete>('Get Frete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
