import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  user = {
    nombre: '',
    email: '',
    numero: '',
    direccion: '',
    referencia: '',
    password1: '',
    password2: ''
  }

  constructor(private fb: FormBuilder, private authService:AuthService,
    private router:Router) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numero: ['', Validators.required],
      direccion: ['', Validators.required],
      referencia: [''],
      password1: ['', Validators.required],
      password2: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  singUp(){
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;
      console.log('Nombres:', this.user.nombre);
      console.log('Email:', this.user.email);
      console.log('Número Telefónico:', this.user.numero);
      console.log('Dirección:', this.user.direccion);
      console.log('Referencia de Vivienda:', this.user.referencia);
      console.log('Contraseña:', this.user.password1);

      this.authService.singUp(this.user)
      .subscribe(
        res => {
          console.log(res)
          //localStorage.setItem('token', res.token);
          alert('Usuario registrado');
          this.router.navigate(['/'])
        },
        err => console.log(err)
      )
    }
    
  }
  
}
