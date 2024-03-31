import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FunctionDataService {

  overlay = false;

  constructor() { }


  showOverlay() {
    this.overlay = true;
    setTimeout(() => {
      this.overlay = false;
    }, 3000);
  }
}
