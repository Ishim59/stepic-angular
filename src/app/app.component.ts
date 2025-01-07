import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { Observable, Subscription, interval } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscription: Subscription | null = null;

  // Используем оператор interval для создания потока
  stream$: Observable<string> = interval(1000).pipe(
    map(counter => `stream ${counter}`)
  );

  public startStream(): void {
    if (!this.subscription) { // Предотвращаем множественные подписки
      this.subscription = this.stream$.subscribe({
        next: (data) => console.log(data),
        error: (err) => console.error('Ошибка потока:', err),
        complete: () => console.log('Поток завершен')
      });
      console.log('Поток запущен');
    }
  }

  public stopStream(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
      console.log('Поток остановлен');
    } else {
      console.log('Нет активного потока для остановки');
    }
  }
}
