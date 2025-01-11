import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mockArr: string[] = ['первый элемент массива', 'Второй элемент массива', 'Третий элемент массива'];

  public showDataItem(i: number, item: string) {
    alert(`Номер карты на которую нажали ${i}, карта содержит следующее значение: ${item}.`)
  };
}
