// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Changez l'URL si nécessaire
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  register(firstName: string, lastName: string, pseudo: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { first_name: firstName, last_name: lastName, pseudo, email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }


  // Méthode pour se déconnecter
  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getProfile(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`${this.apiUrl}//profile/update`, { headers });
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`).pipe(
      map((response: any) => response.data)
    );
  }
  
  getUserId(): number {
    return parseInt(localStorage.getItem('userId') || '0', 10);
  }

    getUserInfo(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/profile`, { headers: this.getHeaders() });
    }
    
    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('token');       
      if (token) {
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
      } else {
        console.error('Token non trouvé');
        return new HttpHeaders();
      }
    }

}
