import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthService } from "../auth/auth.service";
import { GLOBAL } from "../shared/services/global";

@Injectable()
export class EventService {
  private url: string;
  private headers: Headers;

  constructor(private http: Http, private authService: AuthService) {
    this.url = GLOBAL.url_api + "/events/";
    this.headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authService.getToken()});
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo only
    return Promise.reject(error.message || error);
  }
}
