import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AsyncPipe, JsonPipe, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import {ChildrenComponent} from "./children/children.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, JsonPipe, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe, ChildrenComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    parentString: string = "Строка которая изначально находилась в родителе."

  onChildClicked($event: any) {
    this.parentString = $event;
  }

  public onChildrenClickedNewSyntax($event: string) {
    this.parentString = $event;
  };
}
