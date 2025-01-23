import { Routes } from '@angular/router';
import {ItemsPageComponent} from "./items-page/items-page.component";
import {itemsResolver} from "./resolver/items.resolver";

export const routes: Routes = [
  {
    path: '',
    component: ItemsPageComponent,
    resolve: {
      postsData: itemsResolver
    }},
];
