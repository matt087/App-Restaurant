import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Platillo } from '../models/platillo';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {
  private jsonUrl = '../assets/files/platillos.json';
  
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get<Platillo[]>(this.jsonUrl);
  } 
}
