import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { GLOBAL } from "../shared/services/global";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from "./user";

@Injectable()
export class AuthService {
  private url: string;
  private headers: Headers;

  constructor(public http: Http) {
    this.url = GLOBAL.url_api + "/auth";
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  login(username: string, password: string): Observable<boolean> {
    let body = JSON.stringify({username: username, password: password});

    return this.http.post(this.url, body, {headers: this.headers})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          let user: User = this.makeUser(response.json());
          let currentUser = JSON.stringify(user);
          localStorage.setItem('currentUser', currentUser);

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  isLogged(): boolean {
    let token: String = this.getToken();
    return token && token.length > 0;
  }

  getToken(): string {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : "";
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  currentUserIs(role: String) : boolean {
    let user = JSON.parse(localStorage.getItem('currentUser'));

    let r = user.authorities.find((item, index, arr) => {
      return item.toLowerCase() === role.toLowerCase();
    });

    return r ? true : false;
  }

  private makeUser(authResp): User {
    let authorities = new Array<String>();
    authResp.user.authorities.forEach(function(item, index, array) {
      authorities.push(item.authority);
    });

    return new User(authResp.user.name, authResp.user.email, authResp.user.phone, authResp.user.enabled, authResp.token, authorities);
  }
}
