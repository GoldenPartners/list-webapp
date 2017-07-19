import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";
import { User } from "./models/user";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    providers: [UserService]
})
export class UserListComponent implements OnInit {
  public msg: String;
  public users: Array<User>;

  constructor(private userService: UserService) {
    this.msg = 'List of Users!';
    this.users = new Array<User>();
  }

  ngOnInit() {
    this.loadUsers();
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id)
      .then(
        resp => { this.loadUsers(); },
        error => {console.error('An error occurred in dashboard component, navigating to login: ', error);}
      );

  }

  private loadUsers(): void {
    this.userService.getUsers()
      .then(
        resp => { this.users = resp; },
        error => {console.error('An error occurred in dashboard component, navigating to login: ', error);}
      );
  }
}
