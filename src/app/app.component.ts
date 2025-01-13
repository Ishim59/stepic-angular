import { Component } from '@angular/core';
import { Subject, partition } from 'rxjs';

interface Ball {
  color: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly maxBalls = 10;

  leftBalls: Ball[] = [];
  rightBalls: Ball[] = [];

  // Общий поток добавления шариков
  private addBall$ = new Subject<Ball>();

  constructor() {
    // Разделяем поток на "синие" и "остальные" с помощью partition
    const [blueBall$, otherColorBall$] = partition(
      this.addBall$,
      (ball) => ball.color === 'blue'
    );

    // Подписываемся на поток синих шаров и добавляем их в левый контейнер
    blueBall$.subscribe((ball) => {
      if (this.leftBalls.length < this.maxBalls) {
        this.leftBalls.push(ball);
      }
    });

    // Подписываемся на поток остальных цветов и добавляем их в правый контейнер
    otherColorBall$.subscribe((ball) => {
      if (this.rightBalls.length < this.maxBalls) {
        this.rightBalls.push(ball);
      }
    });
  }

  addBlueBall(): void {
    // Отправляем синий шар в поток
    this.addBall$.next({ color: 'blue' });
  }

  addRandomBall(): void {
    // Генерируем случайный цвет и отправляем шар в поток
    const randomColor = this.getRandomColor();
    this.addBall$.next({ color: randomColor });
  }

  reset(): void {
    this.leftBalls = [];
    this.rightBalls = [];
  }

  // Делаем кнопки неактивными, если один из контейнеров переполнен
  isDisabled(): boolean {
    return (
      this.leftBalls.length >= this.maxBalls ||
      this.rightBalls.length >= this.maxBalls
    );
  }

  private getRandomColor(): string {
    const colors = ['red', 'green', 'yellow', 'pink', 'purple', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
