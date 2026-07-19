import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  model: ContactModel = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  send(): void {
    console.log('Contact form submitted:', this.model);
  }
}
