import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mesero } from '../models/mesero';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}
  getWaiter(): Observable<any> {
    return this.http.get<Mesero>(`${this.apiUrl}/waiters`);
  }
}
