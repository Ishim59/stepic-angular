import {Component} from '@angular/core';
import {TotalCounterService} from "../../service/sharedService";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private router: Router,
    private totalCounterService: TotalCounterService,) {
  };

  public getTotalCounter(): number{
    return this.totalCounterService.getTotalCounter();
  };

  logOut() {
    localStorage.setItem('isLogin', 'false');
    this.router.navigate(['/login']);
  };
}
