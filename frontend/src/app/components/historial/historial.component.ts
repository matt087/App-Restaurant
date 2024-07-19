import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface HistorialData {
  fecha: Date;
  nombre: string;
  calificacion: number;
  comentario: string;
}

const ELEMENT_DATA: HistorialData[] = [
  { fecha: new Date(), nombre: 'Juan Pérez', calificacion: 5, comentario: 'Excelente servicio' },
  { fecha: new Date(), nombre: 'Ana Gómez', calificacion: 4, comentario: 'Muy buen servicio' },
  // Agrega más datos de ejemplo según sea necesario
];

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'nombre', 'calificacion', 'comentario', 'acciones'];
  dataSource = new MatTableDataSource<HistorialData>(ELEMENT_DATA);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  edit(element: HistorialData): void {
    console.log('Editando', element);
    this.router.navigate(['/editQualification'], { state: { data: element } });
  }

  delete(element: HistorialData): void {
    console.log('Eliminando', element);
    // Lógica para eliminar la calificación
    this.dataSource.data = this.dataSource.data.filter(item => item !== element);
  }
}
