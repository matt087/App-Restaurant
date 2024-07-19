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

  // Obtener la lista de meseros
  getWaiter(): Observable<any> {
    return this.http.get<Mesero>(`${this.apiUrl}/waiters`);
  }

  // Enviar una calificación
  calificacion(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/rate`, data);
  }

  // Obtener calificaciones por nombre de usuario
  getCalificacionesByUser(userName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/rate/user/${userName}`);
  }

  // Actualizar una calificación por ID
  updateCalificacion(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/rate/${id}`, data);
  }

  // Eliminar una calificación por ID
  deleteCalificacion(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/rate/${id}`);
  }
}
