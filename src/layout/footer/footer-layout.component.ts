import { Component } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-layout',
  standalone: true,
  imports: [NxIcon, RouterLink],
  templateUrl: './footer-layout.component.html',
  styleUrl: './footer-layout.component.scss'
})
export class FooterLayoutComponent {

}
