import {Component, ElementRef, Renderer2} from '@angular/core';
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
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  setColorChildren() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.children'), 'background-color', 'red');
  }
}
