import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class BookService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  private tokenSubject = new BehaviorSubject<string | null>(null);
  public token$ = this.tokenSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  private getAuthHeaders() {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getBooks(): Observable<any> {
    console.log('Token utilisé pour l\'authentification :', this.authService.getToken()); // Pour vérifier le token
    return this.http.get<any>(`${this.apiUrl}/books`, { headers: this.getAuthHeaders() });
  }
  
  getUserBooks(): Observable<any> {
    console.log('Token utilisé pour l\'authentification :', this.authService.getToken()); // Pour vérifier le token
    return this.http.get<any>(`${this.apiUrl}/books/auth`, { headers: this.getAuthHeaders() });
  }

  getBookDetails(bookId: string) {
    return this.http.get<any>(`${this.apiUrl}/books/${bookId}`, { headers: this.getAuthHeaders() });
  }
  

  addBook(bookData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/books`, bookData);
  }
  
  getBookById(bookId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${bookId}`, { headers: this.getAuthHeaders() });
  }

  updateBook(book: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${book.id}`, book);
  }
}
