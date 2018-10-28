import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeCounter: number = 2;
  inactiveCounter: number = 2;

  constructor() { }

  updateCounter(toActive: boolean) {
    if(toActive){
      this.activeCounter++;
      this.inactiveCounter--;
      console.log('Active user: ' + this.activeCounter + ", Inactive user: " + this.inactiveCounter);
    } else {
      this.activeCounter--;
      this.inactiveCounter++;
      console.log('Active user: ' + this.activeCounter + ", Inactive user: " + this.inactiveCounter);
    }
  }
}
