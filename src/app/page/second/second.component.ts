import {Component} from '@angular/core';
import {TotalCounterService} from "../../service/sharedService";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  constructor(
    private totalCounterService: TotalCounterService,
  ) {}

  triggerIncrement() {
    this.totalCounterService.incrementTotalCounter();
  };

  triggerDecrement() {
    this.totalCounterService.decrementTotalCounter();
  };
}
