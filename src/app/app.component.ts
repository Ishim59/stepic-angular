import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { of, range } from "rxjs";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stream$ = of(1,2,3,4,5,6,7,8,9);
  streamRange$ = range(1, 1000)

  startStreamRange(){
    this.streamRange$.subscribe(stream => {
      console.log('stream range', stream);
    });
  }

  public startStream(): void {
     this.stream$.subscribe(stream => {
      console.log('stream of', stream);
    });
  }

  public stopStream(): void {
    alert(
      'Синхронные конечные Observable (of, range) мгновенно эмитят все значения ' +
      'и завершаются. Отписка на такие потоки уже не повлияет.'
    )
  }
}
