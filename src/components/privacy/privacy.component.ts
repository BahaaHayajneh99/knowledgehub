import { Component } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  imports: [NxIcon, RouterLink],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {
  lastUpdated = '20 يوليو 2026';
}
