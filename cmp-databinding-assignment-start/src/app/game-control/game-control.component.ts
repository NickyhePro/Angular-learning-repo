import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  interval;
  currentNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  timerStart() {

  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.currentNumber);
      this.currentNumber++;
    }, 1000)
  }

  onGameStop() {
    clearInterval(this.interval);
  }
}
