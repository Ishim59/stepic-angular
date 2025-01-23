import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login:string = ''
  password: string = ''

  constructor(private router: Router){}

  loginUser(){
    const isValid = (this.login === 'admin' && this.password === 'admin');
    if (isValid) {
      localStorage.setItem('isLogin', 'true');
      this.router.navigate(['/']);
    } else {
      alert('login и password введен неверно!')
    }
  };
}
