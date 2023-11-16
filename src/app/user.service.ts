import {Injectable} from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Result} from "./result";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  };

  login(username: string, password: string) {
    this.http.post<Result<null>>('/api/user/login', {'username': username, 'password': password}).subscribe(res => {
      if (res.code !== 0) {
        alert(res.message);
      }
    });
  };

  register(user: User) {
    this.http.post<Result<null>>('/api/user/register', user).subscribe(res => {
      if (res.code !== 0) {
        alert(res.message);
      }
    });
  };

  info(): Observable<Result<User>> {
    return this.http.get<Result<User>>('/api/user/info');
  };
}
