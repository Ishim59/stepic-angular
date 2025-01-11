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
  isVisibleContentNewDirective: boolean = false;
  isVisibleContentOldDirective:boolean = false;

  public changeIsVisibleContentNewDirective(): void {
    this.isVisibleContentNewDirective = !this.isVisibleContentNewDirective;
  };

  public changeIsVisibleContentOldDirective(): void {
    this.isVisibleContentOldDirective = !this.isVisibleContentOldDirective;
  };
}
