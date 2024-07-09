import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password:''
  }

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService:AuthService,
    private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  signIn(): void {
    if (this.loginForm.valid) {
      this.user = this.loginForm.value;
      console.log('Email:', this.user.email);
      console.log('Password:', this.user.password);
      // Realizar la autenticación con el servidor
    }
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        },
        err => {
          console.error(err);
          if (err.status === 401) {
            alert('Credenciales incorrectas. Inténtelo de nuevo.');
          }
        }
      );
  }
}
