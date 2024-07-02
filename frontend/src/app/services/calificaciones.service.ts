import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mesero } from '../models/mesero';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  private jsonUrl = '../assets/files/meseros.json';

  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get<Mesero[]>(this.jsonUrl);
  }
}
