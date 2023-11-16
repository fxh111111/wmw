import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

export const routes: Routes = [
  {
    path: 'login',
    title: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'register',
    component: RegisterComponent
  }
];
