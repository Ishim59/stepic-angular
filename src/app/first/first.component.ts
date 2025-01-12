import { Component } from '@angular/core';
import {TotalCounterService} from "../service/sharedService";

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  constructor(private totalCounterService: TotalCounterService) {}

  triggerIncrement() {
    this.totalCounterService.incrementTotalCounter();
  };

  triggerDecrement() {
    this.totalCounterService.decrementTotalCounter();
  };
}
