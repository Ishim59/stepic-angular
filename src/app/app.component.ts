import {Component, computed, OnInit, signal} from '@angular/core';
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
export class AppComponent {
  firstValue = signal(0);
  secondValue = signal(0);
  sumOfTwoSignals = computed(() => this.firstValue() + this.secondValue());


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
}
