import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FunctionDataService {
  overlay = false;
  menu = false;
  currentLanguage = 'en';
  fontColorBlack = 'black';

  constructor() { }


  showMenu() {
    this.menu = !this.menu;
  }


  closeMenu() {
    this.menu = false;
  }


  showOverlay() {
    this.overlay = true;
    setTimeout(() => {
      this.overlay = false;
    }, 3000);
  }


  setActiveLanguage(lang: string) {
    this.currentLanguage = lang;
  }


  isLanguageActive(lang: string): boolean {
    return this.currentLanguage === lang;
  }
}
