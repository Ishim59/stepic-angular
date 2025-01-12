import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, NgForm} from "@angular/forms";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onSubmit(myForm: NgForm) {
    console.log(`Вы ввели имя ${myForm.value.firstField}, а так же email ${myForm.value.email}`);
    alert(`Вы ввели имя ${myForm.value.firstField}, а так же email ${myForm.value.email}`)
  };
}
