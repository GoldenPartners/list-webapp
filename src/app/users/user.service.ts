import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthService } from "../auth/auth.service";
import { GLOBAL } from "../shared/services/global";
import { User } from "./models/user";

@Injectable()
export class UserService {
  private url: string;
  private headers: Headers;

  constructor(private http: Http, private authService: AuthService) {
    this.url = GLOBAL.url_api + "/users/";
    this.headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authService.getToken()});
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo only
    return Promise.reject(error.message || error);
  }

  public getUsers(): Promise<Array<User>> {
     return this.http
      .get(this.url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  public getUser(id: string): Promise<User> {
    const url = `${this.url}${id}`;
    return this.http
      .get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  public createUser(user: User): Promise<User> {
    return this.http
      .post(this.url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.text() ? response.json() as User : response)
      .catch(this.handleError);
  }

  public updateUser(user: User): Promise<User> {
    return this.http
      .put(this.url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  public deleteUser(id: string): Promise<void> {
    const url = `${this.url}${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  public resetPassword(model: any): Promise<void> {
    let url = this.url + "reset-password";
    let header = new Headers({'Content-Type': 'application/json'});

    return this.http
      .put(url, JSON.stringify(model), {headers: header})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  public changePassword(model: any): Promise<void> {
    let url = this.url + "change-password";

    return this.http
      .put(url, JSON.stringify(model), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
