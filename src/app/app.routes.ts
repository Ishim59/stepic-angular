import { Routes } from '@angular/router';
import {FirstComponent} from "./page/first/first.component";
import {SecondComponent} from "./page/second/second.component";
import {HomeComponent} from "./page/home/home.component";
import {adminGuard} from "./admin.guard";
import {LoginComponent} from "./page/login/login.component";

export const routes: Routes = [
  {
    path: 'first',
    canActivate: [adminGuard],
    component: FirstComponent
  },
  {
    path: 'second',
    canActivate: [adminGuard],
    component: SecondComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [adminGuard],
    component: HomeComponent
  },
];
