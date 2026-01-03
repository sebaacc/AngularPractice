import { Component } from '@angular/core';
@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.html',
  styleUrls: ['./counter-page.css']
})
export class CounterPageComponent {
  counter: number = 10;
  increaseBy(value: number) {
    this.counter += value;
  }
  reset(){
    this.counter = 10;
  }
}