import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  color = '#5988FF';
  red = '#E61C40';
  hoverColor = '#7ba1ff';
  colorValid = '#dfdfdf';
  isHovered = false;
  isVisible = false;
  text: string | undefined;
  submitAttempted = false;


  http = inject(HttpClient);


  styleElement() {
    if (this.isHovered) {
      return { 'cursor': 'pointer', 'color': this.hoverColor };
    } else {
      return { 'color': this.color }
    }
  }


  showOverlay() {
    this.isVisible = !this.isVisible;
  }


  contactData = {
    name: "",
    email: "",
    message: "",
    checkboxPolicy: false,
  }


  mailTest = true;


  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    this.submitAttempted = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
      this.submitAttempted = false;
    }
  }
}
