import {Component, EventEmitter, output, Output} from '@angular/core';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {
  stringChildren: string = 'Данная строка находилась в компоненте "ребенке",' +
    'теперь она стала доступна в родительском компоненте';

  @Output() clicked = new EventEmitter(); //Данная конструкция позволяет
  //создавать событие которое пробросит данные в родитель.

  clickedNewSyntax = output<string>();

  public sendParentSting(): void {
    this.clicked.emit(this.stringChildren); //Через функцию emit мы сообщаем что
    //действие произошло
  };

  public sendParentStingNewSyntax(): void {
    this.clicked.emit(this.stringChildren);
  };
}
