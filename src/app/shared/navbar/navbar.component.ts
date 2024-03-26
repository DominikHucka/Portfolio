import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
[x: string]: any;
  isActive: boolean = false;


  constructor(private router: Router) {}


  toggleActiveAndNavigate() {
    if (!this.isActive) {
      this.router.navigate(['/menu']);
    } else if (this.isActive) {
      this.router.navigate(['/']);
    } 
    this.toggleActive();
  }


  toggleActive() {
    this.isActive = !this.isActive;
  }
}
