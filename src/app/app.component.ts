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
import {ReversePipe} from "./pipe/pipe-reverse";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, DecimalPipe, CurrencyPipe, PercentPipe, JsonPipe, ReversePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public text: string = 'Пример текста для демонстрации пайпов';
}
