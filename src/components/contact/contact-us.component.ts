import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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

  model: ContactModel = this.emptyModel();

  submitted = false;
  sent = false;

  send(form: NgForm): void {
    this.submitted = true;
    if (form.invalid) return;

    console.log('Contact form submitted:', this.model);

    this.sent = true;
    this.submitted = false;
    this.model = this.emptyModel();
    form.resetForm(this.model);
  }

  sendAnother(): void {
    this.sent = false;
  }

  private emptyModel(): ContactModel {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
