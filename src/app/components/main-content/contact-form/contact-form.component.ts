import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SuccsessComponent } from '../../overlay/succsess/succsess.component';
import { FunctionDataService } from '../../../services/function-data.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, SuccsessComponent, TranslateModule],
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


  function = inject(FunctionDataService);
  http = inject(HttpClient);
  animateSuccsess: any;
  succsess: any;
  privacyPolicyContainer: any;


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


  post = {
    endPoint: 'https://portfolio.dominikhucka.de/sendMail.php',
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
    if (ngForm.submitted && ngForm.form.valid) {
      this.function.showOverlay();
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('Succsessful response from the server:', response);
            ngForm.resetForm();
            this.submitAttempted = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }
}


