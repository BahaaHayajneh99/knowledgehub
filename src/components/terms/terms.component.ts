import { Component } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  imports: [NxIcon, RouterLink],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class TermsComponent {
  lastUpdated = '20 يوليو 2026';
}
