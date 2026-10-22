import { Component, inject, HostListener } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../components/guard/auth/auth.service';

@Component({
  selector: 'app-header-layout',
  imports: [NxIcon, RouterLink],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.scss'
})
export class HeaderLayoutComponent {

  private auth = inject(AuthService);
  private router = inject(Router);

  dropdownOpen = false;

  get isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  get currentUser() {
    return this.auth.getCurrentUser();
  }

  get userInitials(): string {
    const name = this.currentUser?.fullName ?? '';
    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map(w => w[0]?.toUpperCase() ?? '')
      .join('');
  }

  get firstName(): string {
    return this.currentUser?.fullName?.trim().split(/\s+/)[0] ?? '';
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (!target.closest('.header__user')) {
      this.dropdownOpen = false;
    }
  }

  logout(): void {
    this.auth.logout();
    this.dropdownOpen = false;
    this.router.navigate(['/register']);
  }
}
