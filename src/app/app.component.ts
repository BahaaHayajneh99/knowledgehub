import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "../layout/header/header-layout.component";
import { FooterLayoutComponent } from '../layout/footer/footer-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent, FooterLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KnowledgeHub';
}
