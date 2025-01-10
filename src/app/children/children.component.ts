import {Component, input, Input} from '@angular/core';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {
    @Input() parentStringInputOldSyntax = 'Инициализационная строка, на случай если данные не будут получены.';

    parentStringInputNewSyntax = input<string>();
}
