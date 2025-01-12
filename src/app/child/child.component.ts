import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges {
  @Input() itemParent: number = 0

  ngOnChanges() {
    alert('Alert работает каждый раз когда работает метод ngOnChanges')
  };
}
