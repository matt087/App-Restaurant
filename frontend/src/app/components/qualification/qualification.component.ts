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
  qualificationForm: FormGroup;
  qualities: string[] = ['Excelente', 'Muy Bueno', 'Bueno', 'Regular', 'Malo'];
  waitressOptions: Mesero[] = [];

  constructor(private fb: FormBuilder, private qs:CalificacionesService) {
    this.qs.getData().subscribe(data =>{
        this.waitressOptions = data.meseros;
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

  onSubmit(): void {
    if (this.qualificationForm.valid) {
      console.log(this.qualificationForm.value);
      // aquí podrías manejar el envío del formulario
    }
  }
}
