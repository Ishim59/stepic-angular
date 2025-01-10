import {Component, ElementRef, QueryList, Renderer2, ViewChildren} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import {ChildrenComponent} from "./children/children.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ChildrenComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren(ChildrenComponent, { read: ElementRef }) itemsComponents!: QueryList<ElementRef>;
  constructor(private renderer: Renderer2) {}

  mockList: string[] = ['Первый элеиент', 'Второй элеиент', 'Третий элемент']

  setColorChildren() {
    this.itemsComponents.forEach((child: ElementRef) => {
      this.renderer.setStyle(child.nativeElement.querySelector('.children'), 'background-color', 'red');
    });
  }
}
