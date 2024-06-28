import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.css'
})
export class QualificationComponent {
  qualificationForm: FormGroup;
  qualities: string[] = ['Excelente', 'Muy Bueno', 'Bueno', 'Regular', 'Malo'];
  waitressOptions: string[] = ['Juan Donoso', 'Mateo Montenegro', 'Brenda Simbaña', 'Alexandro Mendoza'];

  constructor(private fb: FormBuilder) {
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
