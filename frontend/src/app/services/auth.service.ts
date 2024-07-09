import { Injectable,Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router,  @Inject(PLATFORM_ID) private platformId: Object,
  @Inject(DOCUMENT) private document: Document ) { }

  singUp(user: { email: string; password: string; }){
    return this.http.post<any>(this.URL + '/register',user);
  }
  
  signIn(user: { email: string; password: string; }): Observable<any> {
    return this.http.post<any>(`${this.URL}/login`, user).pipe(
      catchError(error => {
        // Manejo de errores
        return throwError(error);
      })
    );
  }
  //veridica si el token existe 
  loggedIn(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('token');
    } else {
      console.log('no')
      return false;
    }
  }
  // obtiene el token del local storage
  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    } else {
      return null; // Manejo alternativo si no estás en el navegador
    }
  }
  
  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/login']);
  }
}
