import { Component } from '@angular/core';
import {Observable, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'untitled';
  listBackgroundChoose = [];
  private intervalId = 0;
  count = 5;
  remainingTime = this.count;
  backgroundShow = '';
  backgroundChoose = '#000000';
  isStart: boolean;

  constructor() {
  }
  onChange(): void {
    this.listBackgroundChoose.push(this.backgroundChoose);
    if (this.backgroundShow === '') this.backgroundShow = this.listBackgroundChoose[0];
  }

  clearTimer(): void {
    clearInterval(this.intervalId);
  }


  start(): void {
    this.isStart = true;
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.count;
    }
  }
  reset(): void {
    this.isStart = false;
    this.clearTimer();
    this.remainingTime = this.count;
    this.index = 0;
    this.backgroundShow = this.listBackgroundChoose[0];
  }
  index = 0;
  private countDown(): void {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.remainingTime = this.count;
        if (this.index === this.listBackgroundChoose.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }
        this.backgroundShow = this.listBackgroundChoose[this.index];

      }
    }, 1000);
  }
}
