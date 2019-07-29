import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {MarqueMoto} from '../models/marque-moto';

@Injectable({
  providedIn: 'root'
})
export class MarqueMotoService {

  marqueMoto: MarqueMoto[];
  apiURL = 'http://localhost:3000/marques-moto';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {
    this.marqueMoto = [];
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getAll(): Observable<MarqueMoto[]> {
    return this.http.get<MarqueMoto[]>(this.apiURL)
      .pipe(retry(1), catchError(this.handleError));
  }
  getOne(id: number): Observable<MarqueMoto> {
    return this.http.get<MarqueMoto>(this.apiURL + '/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  add(marqueMoto: MarqueMoto) {
    return this.http.post<MarqueMoto>(this.apiURL, JSON.stringify(marqueMoto), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  edit(marqueMoto: MarqueMoto) {
    return this.http
      .put<MarqueMoto>(this.apiURL + '/' + marqueMoto.id, JSON.stringify(marqueMoto), this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  delete(id: number) {
    return this.http.delete<MarqueMoto>(this.apiURL + '/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
}
