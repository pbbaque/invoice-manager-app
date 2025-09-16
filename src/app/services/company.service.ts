import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environments';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl: string = environment.apiUrl;
  private headers = { 'Content-Type': 'application/json' };

  constructor(private http: HttpClient) { }

  findAll(): Observable<Company[]> {
    return this.http.get<ApiResponse<Company[]>>(`${this.apiUrl}/companies`, { headers: this.headers }).pipe(
      map(response => {
        if (!response.success)
          throw new Error(response.message || 'Error desconocido al obtener las empresas');
        return response.data;
      }),
      catchError(error => {
        console.error('Error en findAll', error);
        return throwError(() => new Error(error.message || 'Error en la solicitud'));
      })
    );
  }

  registerCompany(company: Omit<Company, 'id'>): Observable<Company> {
    return this.http.post<Company>(`${this.apiUrl}/companies`, company, { headers: this.headers });
  }
}
