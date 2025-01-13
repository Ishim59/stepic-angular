import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup;

  constructor() {
    // Инициализируем нашу FormGroup без валидации
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      age: new FormControl(''),
      phone: new FormControl(''),
      terms: new FormControl(false),
    });
  }

  onSubmit(): void {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      age,
      phone,
      terms,
    } = this.myForm.value;

    console.log(
      `Имя: ${firstName}, Фамилия: ${lastName}, Email: ${email}, Пароль: ${password}, Подтверждение: ${confirmPassword}, Возраст: ${age}, Телефон: ${phone}, Согласие: ${terms}`
    );

    alert(
      `Регистрация успешна!\n` +
      `Имя: ${firstName}\n` +
      `Фамилия: ${lastName}\n` +
      `Email: ${email}\n` +
      `Пароль: ${password}\n` +
      `Подтверждение: ${confirmPassword}\n` +
      `Возраст: ${age}\n` +
      `Телефон: ${phone}\n` +
      `Согласие: ${terms}`
    );

    // Сброс формы
    this.myForm.reset();
  }
}
