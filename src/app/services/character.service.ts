import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'http://gateway.marvel.com';

  constructor(private http: HttpClient) { }

  // GET request all
  getAllCharacters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/v1/public/characters?ts=1&apikey=a849861b78fe8e15ea275dd5e41d4cbf&hash=0a90c2d5bd62beb282a14ffe552b3f7c`)
      .pipe(
        catchError(this.handleError<any[]>('getItems', []))
      );
  }

  // GET request with id
  getCharacterId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}//v1/public/characters/${id}?ts=1&apikey=a849861b78fe8e15ea275dd5e41d4cbf&hash=0a90c2d5bd62beb282a14ffe552b3f7c`)
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
