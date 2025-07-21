import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environments';
import { ApiResponse } from '../models/api-response';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;
  private headers = { 'Content-Type': 'application/json' };

  // Reactive state to control login/logout throughout the application
  private loggedIn: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private storageService: StorageService) {
    this.loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  }

  hasToken(): boolean {
    return !!this.storageService.getToken();
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  getLoggedInObservable(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(credentials: { email: string; password: string }): Observable<ApiResponse<User>> {
    console.log('Logging in with credentials:', credentials);
    return this.http.post<ApiResponse<User>>(`${this.apiUrl}/auth/login`, credentials, { headers: this.headers }).pipe(
      tap(
        response => {
          const token = response.token;
          if (token) {
            this.storageService.saveToken(token);
            this.storageService.saveUser(response.data);
            this.loggedIn.next(true);
            console.log('Login successful, token saved:', token);
          }
        }
      )
    );
  }

  logout(): void {
    this.storageService.clear();
    this.loggedIn.next(false);
  }

  forgotPassword(email: string) {
    console.log('Requesting password reset for email:', email);
    const params = new HttpParams().set('email', email);
    return this.http.post<ApiResponse<string>>(`${this.apiUrl}/auth/forgot-password`, null, { headers: this.headers, params: params });
  }


}
