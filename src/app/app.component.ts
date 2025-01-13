import { Component, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { map, filter, scan, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  // Создаём FormControl с типом number, допускающим null
  numberControl = new FormControl<number | null>(0);
  // Текущая сумма
  currentSum = 0;
  // Подписка для управления жизненным циклом
  private subscription: Subscription;

  constructor() {
    // Подписываемся на size$, чтобы обновлять currentSum
    this.subscription = this.size$.subscribe(value => {
      this.currentSum = value;
    });
  };

  // Поток суммируемых значений
  size$ = this.numberControl.valueChanges.pipe(
    // Преобразуем значение в число
    map(value => Number(value)),
    // Фильтруем NaN значения
    filter(value => !isNaN(value)),
    // Складываем значения
    scan((acc, curr) => acc + curr, 0),
    // Начальное значение для подписчиков
    startWith(0)
  );

  resetCircle() {
    /**
     * Ключевой трюк:
     * - Отправляем "отрицательное" значение текущей суммы в поток.
     *   Это сводит результат scan() к нулю (acc + (-acc) = 0).
     * - Быстро сбрасываем поле ввода, чтобы пользователь не видел
     *   это отрицательное число.
     */
    this.numberControl.setValue(-this.currentSum);

    // Сбросим поле ввода после того, как поток успел обработать это значение
    setTimeout(() => this.numberControl.reset(null), 0);
  };

  // Реализуем OnDestroy для отписки
  ngOnDestroy() {
    this.subscription.unsubscribe();
  };
}
