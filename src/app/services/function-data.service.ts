import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FunctionDataService {
  overlay = false;
  currentLanguage = 'en';
  fontColorBlack = 'black';

  constructor() { }


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
