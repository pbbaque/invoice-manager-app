import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.apiUrl;
  private headers = { 'Content-Type': 'application/json' };
  
  constructor( private http: HttpClient ) { }
}
