import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/api-response';
import { Client } from '../models/client';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl: string = environment.apiUrl;
  private headers = { 'Content-Type': 'application/json' };
  
  constructor( private http: HttpClient ) { }

  findAll(): Observable<Client[]> {
    return this.http.get<ApiResponse<Client[]>>(`${this.apiUrl}/clients`, {headers: this.headers}).pipe(
      map(response => {
        if(!response.success)
          throw new Error(response.message || 'Error desconocido al obtener los clientes');
        return response.data;
      }),
      catchError(error => {
        console.error('Error en findAll', error);
        return throwError(() => new Error(error.message || 'Error en la solicitud'));
      })
    );
  }

}
