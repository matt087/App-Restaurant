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

   data = {
    waiterName: '',
    rating: '',
    comment: ''
  };

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
      rating: ['', Validators.required],
      comment: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if(this.qualificationForm.valid){
      this.data = this.qualificationForm.value;
      console.log(this.data);
    }
    this.qs.calificacion(this.data)
    .subscribe(
      (response) => {
        console.log('Calificación guardada correctamente:', response);
        alert('Calificación enviada correctamente.');
        this.qualificationForm.reset();  
      },
      (error) => {
        console.error('Error al guardar calificación:', error);
      }
    );
  }
}
