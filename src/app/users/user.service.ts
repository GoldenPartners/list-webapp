import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthService } from "../auth/auth.service";
import { GLOBAL } from "../shared/services/global";
import { User } from "./models/user";
import { Role } from "./models/role";

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

  getUsers(): Promise<Array<User>> {
     return this.http
      .get(this.url, {headers: this.headers})
      .toPromise()
      // .then(response => console.log(response))
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  getUser(id: string): Promise<User> {
    const url = `${this.url}${id}`;
    return this.http
      .get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  createUser(user: User): Promise<User> {
    return this.http
      .post(this.url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  updateUser(user: User): Promise<User> {
    return this.http
      .put(this.url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  deleteUser(id: string): Promise<void> {
    const url = `${this.url}${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getRoles(): Array<Role> {
    return [
      new Role('admin', 'Admin'),
      new Role('rrpp', 'RRPP'),
      new Role('receptionist', 'Receptionist')
    ]
  }
}
