import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Employee } from '../models/employee';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl: string = environment.apiUrl + '/employees';
    private headers = { 'Content-Type': 'application/json' };
  
    constructor(private http: HttpClient) { }
  
    findAll(): Observable<Employee[]> {
      return this.http.get<ApiResponse<Employee[]>>(`${this.apiUrl}`, { headers: this.headers }).pipe(
        map(response => {
          if (!response.success)
            throw new Error(response.message || 'Error desconocido al obtener los empleados');
          return response.data;
        }),
        catchError(error => {
          console.error('Error en findAll', error);
          return throwError(() => new Error(error.message || 'Error en la solicitud'));
        })
      );
    }

    findAllByCompanyId(companyId: number): Observable<Employee[]> {
      return this.http.get<ApiResponse<Employee[]>>(`${this.apiUrl}/search-by-company/${companyId}`, { headers: this.headers }).pipe(
        map(response => {
          if (!response.success)
            throw new Error(response.message || 'Error desconocido al obtener los empleados');
          return response.data;
        }),
        catchError(error => {
          console.error('Error en findAll', error);
          return throwError(() => new Error(error.message || 'Error en la solicitud'));
        })
      );
    }
}
