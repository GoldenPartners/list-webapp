import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from "../models/user";

@Component({
    selector: 'user-list',
    templateUrl: '../views/user-list.component.html',
    providers: []
})
export class UserListComponent implements OnInit {
  public msg: String;
  public users: Array<User>;

  constructor(private userService: UserService) {
    this.msg = 'List of Users!';
  }

  ngOnInit() {
    this.userService.getUsers()
      .then(
        resp => this.users = resp,
        error => {console.error('An error occurred in dashboard component, navigating to login: ', error);}
      );
}
}
