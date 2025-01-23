import { Component } from '@angular/core';
import {TotalCounterService} from "../../service/sharedService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'] // Исправлено с styleUrl на styleUrls и передан массив
})
export class FirstComponent {
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

  goToSecondPage() {
    this.router.navigate(['/second']);
  };

  goToHomePage(){
    this.router.navigate(['/']);
  };
}
