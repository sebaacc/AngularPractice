import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.html',
  styleUrls: ['./counter-page.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush ---> no hace falta en la versión actual para que funcione el update dentro del interval... de la línea 14.
})
export class CounterPageComponent {
  counter: number = 10;
  CounterSignal = signal(10);

  // constructor() {
  //   setInterval(() => {
  //     this.CounterSignal.update(v => v + 1)
  //     console.log('Tick');
  //   }, 2000);
  // }

  increaseBy(value: number) {
    this.counter += value;
    this.CounterSignal.update(current => current + value);
  }
  reset(){
    this.counter = 0;
    this.CounterSignal.set(0);
  }
}