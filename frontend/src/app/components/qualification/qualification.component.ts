import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mesero } from '../../models/mesero';
import { CalificacionesService } from '../../services/calificaciones.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.css'
})
export class QualificationComponent {

  waiterName: string = '';
  rating: number = 0;
  comment: string = '';

  qualificationForm: FormGroup;
  qualities: string[] = ['Excelente', 'Muy Bueno', 'Bueno', 'Regular', 'Malo'];
  waitressOptions: Mesero[] = [];

  constructor(private fb: FormBuilder, private qs:CalificacionesService) {
    this.qs.getWaiter().subscribe(data =>{
        this.waitressOptions = data;
        console.log(this.waitressOptions);
    });
    this.qualificationForm = this.fb.group({
      waiterName: ['', Validators.required],
      serviceQuality: ['', Validators.required],
      friendliness: ['', Validators.required],
      comments: ['']
    });
  }

  ngOnInit(): void {}

  enviarCalificacion() {
    const data = {
      waiterName: this.waiterName,
      rating: this.rating,
      comment: this.comment
    };

    this.qs.calificacion(data)
    .subscribe(
      (response) => {
        console.log('Calificación guardada correctamente:', response);
        alert('Calificación enviada correctamente.');  
      },
      (error) => {
        console.error('Error al guardar calificación:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.qualificationForm.valid) {
      console.log(this.qualificationForm.value);
      
    }
  }
}
