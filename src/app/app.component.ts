import {Component, computed, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AsyncPipe, JsonPipe, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, JsonPipe, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  firstValue = signal(0);
  secondValue = signal(0);
  firstLocalValue: number = 0;
  secondLocalValue: number = 0;

  sumOfTwoSignals = computed(() => this.firstValue() + this.secondValue());
  sumOfTwoLocalValue: number = this.firstLocalValue + this.secondLocalValue;


  public increaseByOneFirstValue(): void {
    this.firstValue.update((value)=> value + 1)
  };

  public decreaseByOneFirstValue(): void {
    this.firstValue.update((value)=> value - 1)
  };

  public increaseByOneSecondValue(): void {
    this.secondValue.update((value)=> value + 1)
  };

  public decreaseByOneSecondValue(): void {
    this.secondValue.update((value)=> value - 1)
  };

  /////// Используем ниже локальную переменную ///////
  increaseByOneFirstLocalValue() {
    this.firstLocalValue++
  }

  decreaseByOneFirstLocalValue() {
    this.firstLocalValue--
  }

  increaseByOneSecondLocalValue() {
    this.secondLocalValue++
  }

  decreaseByOneSecondLocalValue() {
    this.secondLocalValue--
  }
}
