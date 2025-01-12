import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item: any = {
    data: {
      value: 'old value'
    }
  };

  // changeItem(){  Данный подход позволит определить изменения методу onChanges так как происходит
  //   this.item = { создание копии объекта и меняется ссылка объекта.
  //     ...this.item,
  //     data: {
  //       value: 'new value'
  //     }
  //   };
  // }

  changeItem(){
    this.item.data.value = 'new value';
  };
}
