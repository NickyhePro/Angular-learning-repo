import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(numberPassed: number) {
    if(numberPassed % 2 === 0) {
      this.evenNumbers.push(numberPassed);
    }else{
      this.oddNumbers.push(numberPassed);
    }
  }
}
