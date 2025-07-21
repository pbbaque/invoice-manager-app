import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl: string = environment.apiUrl;
  private headers = { 'Content-Type': 'application/json' };


  constructor(private http: HttpClient ) { }

  registerCompany(company: Omit<Company, 'id'>): Observable<Company> {
    return this.http.post<Company>(`${this.apiUrl}/companies`, company, { headers: this.headers });
  }
}
