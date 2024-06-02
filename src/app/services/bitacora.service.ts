import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bitacora} from '../models/bitacora.model';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  constructor(private http: HttpClient) { }

  private apiUrl = `${environment.api}`;
  private apiKey = `${environment.apikey}`;

   // GET request all
   getAllBitacora(): Observable<Bitacora[]> {

    const username = "user";
    const pass = "password"
    const b64 = btoa(`${username}:${pass}`)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${b64}` 
    });


    return this.http.get<Bitacora[]>(`${this.apiUrl}/bitacora`,
      {headers}
    )
      .pipe(
        catchError(this.handleError<Bitacora[]>('getAllBitacora', []))
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
