import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
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
    if (myForm.valid) {
      const { firstName, lastName, email, age, phone } = myForm.value;
      console.log(`Имя: ${firstName}, Фамилия: ${lastName}, Email: ${email}, Возраст: ${age}, Телефон: ${phone}`);
      alert(`Регистрация успешна! \nИмя: ${firstName} \nФамилия: ${lastName} \nEmail: ${email} \nВозраст: ${age} \nТелефон: ${phone}`);
      myForm.reset();
    }
  }
}
