import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AsyncPipe, JsonPipe, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { map, Observable, of } from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, JsonPipe, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataValue = signal(0);
  stream$!: Observable<number>;

  public changeDataValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
    this.dataValue.set(value);
    this.stream$ = of(this.dataValue()).pipe(
      map(value => value * 2) // Умножаем значение на два
    );
  }

  ngOnInit() {
    // Инициализация stream$ при загрузке компонента, если необходимо
    this.stream$ = of(this.dataValue()).pipe(
      map(value => value * 2)
    );
  }
}
