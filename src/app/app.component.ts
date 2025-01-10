import {Component,  ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import {ChildrenComponent} from "./children/children.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,  ChildrenComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ChildrenComponent, { static: false }) childComponent!: ChildrenComponent;

  triggerChildrenMethod() {
    this.childComponent.sayHello();
  }
}
