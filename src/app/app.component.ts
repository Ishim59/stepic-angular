import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
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
    this.myForm = new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(65)]),
        phone: new FormControl('', [
          // Пример валидации: телефон из 10 цифр
          Validators.pattern(/^[0-9]{10}$/),
        ]),
        // Для checkbox валидатор "requiredTrue"
        terms: new FormControl(false, [Validators.requiredTrue]),
      },
      // Добавляем кастомный валидатор на совпадение паролей
      [this.passwordMatchValidator]
    );
  }

  // Кастомный валидатор на совпадение полей "password" и "confirmPassword"
  passwordMatchValidator(formGroup: AbstractControl): { [key: string]: any } | null {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      // Устанавливаем ошибку "passwordMismatch" для поля confirmPassword
      confirmPassword.setErrors({ passwordMismatch: true });
    } else if (confirmPassword?.errors?.['passwordMismatch']) {
      // Если пароли совпали, а ошибка "passwordMismatch" до сих пор висит — убираем
      confirmPassword.setErrors(null);
    }

    return null;
  }

  onSubmit(): void {
    if (this.myForm.valid) {
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
        `Имя: ${firstName}, Фамилия: ${lastName}, Email: ${email}, Пароль: ${password}, Подтверждение: ${confirmPassword}, Возраст: ${age}, Телефон: ${phone}, Условия: ${terms}`
      );

      alert(
        `Регистрация успешна!\n` +
        `Имя: ${firstName}\n` +
        `Фамилия: ${lastName}\n` +
        `Email: ${email}\n` +
        `Возраст: ${age}\n` +
        `Телефон: ${phone}`
      );

      this.myForm.reset();
    } else {
      alert('Пожалуйста, исправьте ошибки в форме.');
    }
  }
}
