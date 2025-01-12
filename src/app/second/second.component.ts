import { Component } from '@angular/core';
import {TotalCounterService} from "../service/sharedService";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  constructor(private totalCounterService: TotalCounterService) {}

  triggerIncrement() {
    this.totalCounterService.incrementTotalCounter();
  };

  triggerDecrement() {
    this.totalCounterService.decrementTotalCounter();
  };
}
