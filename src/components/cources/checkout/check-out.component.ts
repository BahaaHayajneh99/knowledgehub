import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
import { CoursesService, Course } from '../courses.service';

@Component({
  selector: 'app-check-out',
  imports: [ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent implements OnInit {

  form!: FormGroup;
  step: 'form' | 'processing' | 'success' = 'form';
  couponCode = '';
  couponMsg  = '';
  couponIsError = false;
  offerCourses: Course[] = [];

  constructor(
    private fb: FormBuilder,
    public cart: CartService,
    private courseSvc: CoursesService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nameOnCard:     ['', [Validators.required, Validators.minLength(3)]],
      cardNumber:     ['', [Validators.required, Validators.pattern(/^\d{4} \d{4} \d{4} \d{4}$/)]],
      expirationDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvc:            ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
      saveInfo:       [false],
    });

    // Seed 2 demo items when cart is empty
    if (this.cart.count() === 0) {
      this.courseSvc.allCourses.slice(0, 2).forEach(c => this.cart.addCourse(c));
    }

    this.offerCourses = this.courseSvc.allCourses.slice(0, 3);
  }

  /** Auto-format card number as XXXX XXXX XXXX XXXX */
  formatCardNumber(e: Event): void {
    const el = e.target as HTMLInputElement;
    let v = el.value.replace(/\D/g, '').slice(0, 16);
    v = v.replace(/(.{4})/g, '$1 ').trim();
    el.value = v;
    this.form.get('cardNumber')!.setValue(v, { emitEvent: false });
  }

  /** Auto-format expiry as MM/YY */
  formatExpiry(e: Event): void {
    const el = e.target as HTMLInputElement;
    let v = el.value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
    el.value = v;
    this.form.get('expirationDate')!.setValue(el.value, { emitEvent: false });
  }

  applyCoupon(): void {
    if (!this.couponCode.trim()) return;
    const ok = this.cart.applyCoupon(this.couponCode.trim());
    this.couponIsError = !ok;
    this.couponMsg = ok ? '✓ تم تطبيق الخصم بنجاح!' : '✗ كود الخصم غير صحيح.';
  }

  invalid(f: string): boolean {
    const c = this.form.get(f);
    return !!(c?.invalid && c.touched);
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.step = 'processing';
    setTimeout(() => { this.step = 'success'; this.cart.clearCart(); }, 2000);
  }

  discountPct(): number {
    const s = this.cart.subtotal();
    return s > 0 ? Math.round((this.cart.discount() / s) * 100) : 0;
  }
}

