import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe, JsonPipe,
  LowerCasePipe, PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, DecimalPipe, CurrencyPipe, PercentPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public text: string = 'Пример текста для демонстрации пайпов';
  public dateValue: Date = new Date();
  public amount: number = 1234.567;
  public percentage: number = 0.789;
  public items = ['Angular', 'React', 'Vue', 'Svelte'];
  public longText: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse ultrices, urna a cursus pulvinar, lectus lectus tincidunt nulla,
  eget tristique magna felis id libero.`;

  public user = {
    firstName: 'Иван',
    lastName: 'Иванов',
    age: 30
  };
}
