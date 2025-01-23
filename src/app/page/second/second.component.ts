import { Component } from '@angular/core';
import {TotalCounterService} from "../../service/sharedService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  constructor(
    private totalCounterService: TotalCounterService,
    private router: Router
  ) {}

  triggerIncrement() {
    this.totalCounterService.incrementTotalCounter();
  };

  triggerDecrement() {
    this.totalCounterService.decrementTotalCounter();
  };

  goToFirstPage() {
    this.router.navigate(['/first']);
  };

  goToHomePage(){
    this.router.navigate(['/']);
  };
}
