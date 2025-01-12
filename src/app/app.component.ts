import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {TotalCounterService} from "./service/sharedService";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, FirstComponent, SecondComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private totalCounterService: TotalCounterService) {
  };

  public getTotalCounter(): number{
    return this.totalCounterService.getTotalCounter();
  };
}
