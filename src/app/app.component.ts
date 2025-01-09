import {Component, OnInit, signal} from '@angular/core';
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
export class AppComponent implements OnInit {
  firstValue = signal(0);
  secondValue = signal(0);
  sumOfTwoSignals = signal(0);

  ngOnInit(): void {
    this.sumOfTwoSignals.set(this.firstValue() + this.secondValue()); // Данное событие
    // происходит один раз, как следствие, мы не увидим увеличение суммы.
    // В следующих уроках мы рассмотрим, как сделать вычисляемое значение
    // на основании сигналов.
  };

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
