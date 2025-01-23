import {Component} from '@angular/core';
import {TotalCounterService} from "../../service/sharedService";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
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
