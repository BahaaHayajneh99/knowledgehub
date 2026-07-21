import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../guard/auth/auth.service';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'app-sign-login-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-login-page.component.html',
  styleUrl: './sign-login-page.component.scss'
})
export class SignLoginPageComponent {

  private auth = inject(AuthService);
  private router = inject(Router);

  activeTab: 'login' | 'signup' = 'login';

  loginForm = { email: '', password: '', remember: false };
  signupForm = { fullName: '', email: '', password: '', confirmPassword: '', terms: false };

  loginSubmitted = false;
  signupSubmitted = false;
  loginError = '';
  signupError = '';

  showLoginPassword = false;
  showSignupPassword = false;
  showSignupConfirm = false;

  // ── Login validators ────────────────────────────────────────────
  get loginEmailValid(): boolean { return EMAIL_REGEX.test(this.loginForm.email); }
  get loginPasswordValid(): boolean { return this.loginForm.password.length >= 6; }

  // ── Signup validators ───────────────────────────────────────────
  get signupNameValid(): boolean { return this.signupForm.fullName.trim().length >= 3; }
  get signupEmailValid(): boolean { return EMAIL_REGEX.test(this.signupForm.email); }
  get signupPasswordValid(): boolean { return this.signupForm.password.length >= 8; }
  get signupConfirmValid(): boolean { return this.signupForm.confirmPassword === this.signupForm.password && this.signupForm.confirmPassword.length > 0; }
  get signupTermsValid(): boolean { return this.signupForm.terms; }

  login(): void {
    this.loginSubmitted = true;
    this.loginError = '';

    if (!this.loginEmailValid || !this.loginPasswordValid) return;

    const success = this.auth.login(this.loginForm.email, this.loginForm.password);
    if (success) {
      this.router.navigate(['/']);
    } else {
      this.loginError = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
    }
  }

  signUp(): void {
    this.signupSubmitted = true;
    this.signupError = '';

    if (!this.signupNameValid || !this.signupEmailValid || !this.signupPasswordValid
        || !this.signupConfirmValid || !this.signupTermsValid) return;

    const success = this.auth.signUp(
      this.signupForm.fullName,
      this.signupForm.email,
      this.signupForm.password
    );

    if (success) {
      this.activeTab = 'login'; 
      this.signupForm = { fullName: '', email: '', password: '', confirmPassword: '', terms: false };
    } else {
      this.signupError = 'هذا البريد الإلكتروني مسجّل بالفعل، يرجى تسجيل الدخول';
    }
  }
}

