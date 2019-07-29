import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Moto} from '../models/moto';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  motos: Moto[];
  apiURL = 'http://localhost:3000/motos';
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
    this.motos = [];
  }

  getMotos(): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiURL).pipe(retry(1), catchError(this.handleError));
  }


  private handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  create(moto: Moto) {
    return this.http.post<Moto>(this.apiURL , JSON.stringify(moto),
      this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateMoto(moto: Moto) {
    return this.http.put<Moto>(this.apiURL + '/' + moto.id, JSON.stringify(moto),
      this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<Moto> {
    return this.http.delete<Moto>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getOneMoto(id: number): Observable<Moto> {
    return this.http.get<Moto>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
      );
    catchError(this.handleError);
  }
}
