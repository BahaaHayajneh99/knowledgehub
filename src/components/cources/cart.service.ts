import { Injectable, signal, computed } from '@angular/core';
import { Course } from './courses.service';

export interface CartItem {
  course: Course;
}

@Injectable({ providedIn: 'root' })
export class CartService {

  private _items    = signal<CartItem[]>([]);
  private _discount = signal(0);

  readonly items    = this._items.asReadonly();
  readonly count    = computed(() => this._items().length);
  readonly subtotal = computed(() =>
    parseFloat(this._items().reduce((s, i) => s + i.course.price, 0).toFixed(2))
  );
  readonly discount = this._discount.asReadonly();
  readonly tax      = computed(() => parseFloat((this.subtotal() * 0.1).toFixed(2)));
  readonly total    = computed(() =>
    parseFloat((this.subtotal() - this.discount() + this.tax()).toFixed(2))
  );

  addCourse(course: Course): void {
    if (!this.isInCart(course.id)) {
      this._items.update(list => [...list, { course }]);
    }
  }

  removeCourse(courseId: number): void {
    this._items.update(list => list.filter(i => i.course.id !== courseId));
  }

  isInCart(courseId: number): boolean {
    return this._items().some(i => i.course.id === courseId);
  }

  /** Returns true if the code is valid and applies the discount. */
  applyCoupon(code: string): boolean {
    const codes: Record<string, number> = {
      SAVE10:  0.10,
      LEARN20: 0.20,
      HUB15:   0.15,
    };
    const rate = codes[code.toUpperCase()];
    if (rate !== undefined) {
      this._discount.set(parseFloat((this.subtotal() * rate).toFixed(2)));
      return true;
    }
    this._discount.set(0);
    return false;
  }

  clearCart(): void {
    this._items.set([]);
    this._discount.set(0);
  }
}
