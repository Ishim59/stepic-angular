import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { Observable, Subscription, from } from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscription: Subscription | null = null;

  // Создаём поток из массива чисел
  stream$: Observable<number> = from([1, 2, 3, 4, 5]);

  public startStream(): void {
    if (!this.subscription) { // Предотвращаем множественные подписки
      this.subscription = this.stream$.subscribe({
        next: (data) => console.log(`Получено: ${data}`),
        error: (err) => console.error('Ошибка потока:', err),
        complete: () => {
          console.log('Поток завершен');
          this.subscription = null; // Сбрасываем подписку после завершения
        }
      });
      console.log('Поток запущен');
    }
  }
}
