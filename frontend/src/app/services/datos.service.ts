import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dato } from '../models/dato';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<Dato>(`${this.apiUrl}/info`);
  }
}
