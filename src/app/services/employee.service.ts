import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl: string = environment.apiUrl;
  private headers = { 'Content-Type': 'application/json' };
  
  constructor( private http: HttpClient ) { }
}
