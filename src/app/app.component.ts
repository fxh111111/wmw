import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {UserService} from "./user.service";
import {User} from "./user";
import { Observable } from 'rxjs';
import { Result } from './result';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, RouterLink, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Words Make World!';
  userService = inject(UserService);
  me$!: Observable<Result<User>>;

  constructor() {
    this.me$ = this.userService.info();
  }
}
