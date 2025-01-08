import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  dataValue = signal(0);

  public changeDataValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
    this.dataValue.set(value);
  }
}
