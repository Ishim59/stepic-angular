import { Component } from '@angular/core';
import {TotalCounterService} from "../../service/sharedService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private totalCounterService: TotalCounterService,
    private router: Router) {
  };

  public getTotalCounter(): number{
    return this.totalCounterService.getTotalCounter();
  };

  goToFirstPage() {
    this.router.navigate(['/first']);
  }

  goToSecondPage() {
    this.router.navigate(['/second']);
  }
}
