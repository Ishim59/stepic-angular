import {Component} from '@angular/core';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {
  sayHello(): void {
    alert('Привет из компонента "ребенка" компонента!');
  }
}
