import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface HistorialData {
  fecha: Date;
  nombre: string;
  calificacion: string;
  comentario: string;
}

const ELEMENT_DATA: HistorialData[] = [
  { fecha: new Date(), nombre: 'Juan Pérez', calificacion: 'Excelente', comentario: 'El mejor servicio que he visto' },
  { fecha: new Date(), nombre: 'Ana Gómez', calificacion: 'Muy bueno', comentario: 'Podría mejorar pero estuvo muy bien' },
  // Agrega más datos de ejemplo según sea necesario
];

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'nombre', 'calificacion', 'comentario'];
  dataSource = new MatTableDataSource<HistorialData>(ELEMENT_DATA);

  constructor() {}

  ngOnInit(): void {}
}
