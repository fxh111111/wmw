import {Injectable} from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Result} from "./result";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  };

  login(username: string, password: string) {
    this.http.post<Result>('/api/user/login', {'username': username, 'password': password}).subscribe(res => {
      if (res.code !== 0) {
        alert(res.message);
      }
    });
  };

  register(user: User) {
    this.http.post<Result>('/api/user/register', user).subscribe(res => {
      if (res.code !== 0) {
        alert(res.message);
      }
    });
  };

  info(): User | undefined {
    let user:User|undefined;
    this.http.get<Result>('/api/user/info').subscribe(res => {
      if (res.code !== 0) {
        alert(res.message);
        user = undefined;
      } else {
        user = <User>res.data
      }
    });
    return user;
  };
}
