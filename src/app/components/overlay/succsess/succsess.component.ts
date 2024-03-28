import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-succsess',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './succsess.component.html',
  styleUrl: './succsess.component.scss'
})
export class SuccsessComponent {

  showSucssess = false;


  animateSuccsess() {
    this.showSucssess = true;
  }
}
