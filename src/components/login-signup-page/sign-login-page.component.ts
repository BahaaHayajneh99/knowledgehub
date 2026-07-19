import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-login-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-login-page.component.html',
  styleUrl: './sign-login-page.component.scss'
})
export class SignLoginPageComponent {

  activeTab: 'login' | 'signup' = 'login';

  loginForm = { email: '', password: '', remember: false };

  signupForm = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  };

  login(): void {
    console.log('Login:', this.loginForm);
  }

  signUp(): void {
    if (this.signupForm.password !== this.signupForm.confirmPassword) return;
    console.log('Sign Up:', this.signupForm);
  }
}
