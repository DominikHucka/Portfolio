import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
// import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { FunctionDataService } from '../../services/function-data.service';
import { MenuComponent } from '../../components/overlay/menu/menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
[x: string]: any;
  isActive: boolean = false;


  translate = inject(TranslationService);
  function = inject(FunctionDataService);


  constructor() {}


  toggleMenu() {
    this.function.showMenu();
  }


  // toggleActiveAndNavigate() {
  //   if (!this.isActive) {
  //     this.router.navigate(['/menu']);
  //     window.scrollTo(0, 0);
  //   } else if (this.isActive) {
  //     this.router.navigate(['/']);
  //   } 
  //   this.toggleActive();
  // }


  // toggleActive() {
  //   this.isActive = !this.isActive;
  // }


  switchLanguage(language: string) {
    this.translate.switchLanguage(language);
    this.function.setActiveLanguage(language);
  }
}
