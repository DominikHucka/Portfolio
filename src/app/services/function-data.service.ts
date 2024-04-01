import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FunctionDataService {
  isActive = false;
  overlay = false;

  constructor() { }


  showOverlay() {
    this.overlay = true;
    setTimeout(() => {
      this.overlay = false;
    }, 3000);
  }


  active() {
    this.isActive = true;
  }
}
