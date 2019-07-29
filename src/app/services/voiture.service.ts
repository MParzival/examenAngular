import { Injectable } from '@angular/core';
import {Voiture} from '../models/voiture';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  voitures: Voiture[];
  apiURL = 'http://localhost:3000/voitures';
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
    this.voitures = [];
  }

  getVoitures(): Observable<Voiture[]> {
  return this.http.get<Voiture[]>(this.apiURL).pipe(retry(1), catchError(this.handleError));
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

  create(voiture: Voiture) {
    return this.http.post<Voiture>(this.apiURL , JSON.stringify(voiture),
      this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateVoiture(voiture: Voiture) {
    return this.http.put<Voiture>(this.apiURL + '/' + voiture.id, JSON.stringify(voiture),
      this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<Voiture> {
    return this.http.delete<Voiture>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getOneVoiture(id: number) {
    return this.http.get<Voiture>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
      );
    catchError(this.handleError);
  }
}
