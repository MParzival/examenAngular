import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {MarqueVoiture} from '../models/marque-voiture';

@Injectable({
  providedIn: 'root'
})
export class MarqueVoitureService {
  marqueVoiture: MarqueVoiture[];
  apiURL = 'http://localhost:3000/marques-voiture';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {
    this.marqueVoiture = [];
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
  getAll(): Observable<MarqueVoiture[]> {
    return this.http.get<MarqueVoiture[]>(this.apiURL)
      .pipe(retry(1), catchError(this.handleError));
  }
  getOne(id: number): Observable<MarqueVoiture> {
    return this.http.get<MarqueVoiture>(this.apiURL + '/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  add(marqueVoiture: MarqueVoiture) {
    return this.http.post<MarqueVoiture>(this.apiURL, JSON.stringify(marqueVoiture), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  edit(marqueVoiture: MarqueVoiture) {
    return this.http
      .put<MarqueVoiture>(this.apiURL + '/' + marqueVoiture.id, JSON.stringify(marqueVoiture), this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  delete(id: number) {
    return this.http.delete<MarqueVoiture>(this.apiURL + '/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
}
