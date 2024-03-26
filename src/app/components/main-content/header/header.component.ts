import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Initials } from '../../../modules/initials';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  inintials: Initials;
 


  constructor() {
    this.inintials = new Initials('dominik.hucka', 'googlemail.com');
  }
}
