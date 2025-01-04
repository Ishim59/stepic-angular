import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'my-project';
  isVisible: boolean = false;
  items: string[] = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
  newItem: string = ''; // Добавлено свойство для двусторонней привязки
  /**
   * Метод для переключения видимости списка
   */
  public toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  };
  /**
   * Метод для добавления нового элемента в список
   */
  public addItem(): void {
    if (this.newItem.trim()) { // Проверка на пустую строку
      this.items.push(this.newItem.trim());
      this.newItem = ''; // Очистка поля ввода после добавления
    }
  };
}
