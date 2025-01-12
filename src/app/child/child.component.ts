import {Component, DoCheck, Input, OnChanges, SimpleChanges} from '@angular/core';
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
export class ChildComponent implements OnChanges, DoCheck {
  @Input() item: any;

  ngDoCheck() {
    alert('DoCheck смог определить изменения внутри обьекта');
  };

  ngOnChanges(changes: SimpleChanges) {
    alert(`Сработал ngOnChanges ${changes}`);
  };
}
