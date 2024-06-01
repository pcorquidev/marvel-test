import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = `${environment.api}`;
  private apiKey = `${environment.apikey}`;

  constructor(private http: HttpClient) { }

  // GET request all
  getAllCharacters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?ts=1&apikey=${this.apiKey}&hash=0a90c2d5bd62beb282a14ffe552b3f7c`)
      .pipe(
        catchError(this.handleError<any[]>('getItems', []))
      );
  }

  // GET request with id
  getCharacterId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}?ts=1&apikey=${this.apiKey}&hash=0a90c2d5bd62beb282a14ffe552b3f7c`)
      .pipe(
        catchError(this.handleError<any>('getItem'))
      );
  }

   // Error handling
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
