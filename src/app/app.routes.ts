import { Routes } from '@angular/router';
import {FirstComponent} from "./page/first/first.component";
import {SecondComponent} from "./page/second/second.component";
import {HomeComponent} from "./page/home/home.component";

export const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: '', component: HomeComponent},
];
