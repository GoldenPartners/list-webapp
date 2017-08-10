import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";
import { User } from "./models/user";

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    providers: [UserService]
})
export class UserListComponent implements OnInit {
  public title: String;
  public users: Array<User>;
  public confirm_delete: string;
  public user: any;

  constructor(private userService: UserService) {
    this.title = 'List of Users!';
    this.users = new Array<User>();
    this.user = {};
  }

  ngOnInit() {
    $('.modal').modal();
    this.loadUsers();
  }

  deleteConfirm(id: string) {
    this.confirm_delete = id;
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id)
      .then(
        resp => { this.loadUsers(); },
        error => {console.error('An error occurred in dashboard component, navigating to login: ', error);}
      );

  }

  modalTrigger(user: User) {
    this.user = user;
  }

  private loadUsers(): void {
    this.userService.getUsers()
      .then(
        resp => { this.users = resp; },
        error => {console.error('An error occurred in dashboard component, navigating to login: ', error);}
      );
  }
}
