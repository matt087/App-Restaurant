import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CalificacionesService } from '../../services/calificaciones.service';
import { AuthService } from '../../services/auth.service';

export interface HistorialData {
  fecha: Date;
  nombre: string;
  calificacion: number;
  comentario: string;
}

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'nombre', 'calificacion', 'comentario', 'acciones'];
  dataSource = new MatTableDataSource<HistorialData>([]);

  constructor(private router: Router, private calificacionesService: CalificacionesService, private as:AuthService) {}

  ngOnInit(): void {
    this.obtenerCalificacionesPorUsuario(this.as.getName()?.replace(/\s+/g,'')??''); // Reemplaza 'nombreUsuario' con el nombre del usuario que desees consultar
    console.log(this.as.getName()?.replace(/\s+/g,''));
  }

  obtenerCalificacionesPorUsuario(userName: string): void {
    this.calificacionesService.getCalificacionesByUser(userName).subscribe(
      data => {
        const historialData: HistorialData[] = data.map((calificacion: any) => ({
          fecha: new Date(calificacion.createdAt),
          nombre: calificacion.waiterName,
          calificacion: calificacion.rating,
          comentario: calificacion.comment
        }));
        this.dataSource.data = historialData;
      },
      error => {
        console.error('Error al obtener calificaciones por usuario:', error);
      }
    );
  }

  edit(element: HistorialData): void {
    console.log('Editando', element);
    this.router.navigate(['/editQualification'], { state: { data: element } });
  }

  delete(element: HistorialData): void {
    console.log('Eliminando', element);
    // Lógica para eliminar la calificación
    this.dataSource.data = this.dataSource.data.filter(item => item !== element);
    // Aquí puedes llamar a tu servicio para eliminar la calificación en el backend si es necesario
  }
}
