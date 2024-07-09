import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.authService.login(this.email, this.password)) {
      console.log('Login successful');
    } else {
      this.errorMessage = 'Email o contraseña incorrectos';
      console.log('Login failed');
    }
  }
}
