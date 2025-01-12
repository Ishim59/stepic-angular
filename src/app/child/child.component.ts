import {AfterViewInit, Component} from '@angular/core';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements AfterViewInit {

  ngAfterViewInit() {
    alert('ngAfterViewInit сработал после того как проекция была определена');
  };

}
