import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";
import { AuthService } from "../auth/auth.service";
import { User } from "./models/user";

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    providers: [UserService, AuthService]
})
export class UserListComponent implements OnInit {
  public title: String;
  public users: Array<User>;
  public confirm_delete: string;
  public user: any;
  public userRoles: string;

  constructor(private userService: UserService, private authService: AuthService) {
    this.title = 'List of Users!';
    this.users = new Array<User>();
    this.user = {};
    this.userRoles = '';
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
    let names: Array<String> = new Array<String>();
    user.roles.forEach(r => names.push(r.role));
    this.userRoles = names.join(', ');
  }

  private loadUsers(): void {
    let iduser = this.authService.getLoggedUser().id;

    this.userService.getUsers()
      .then(
        resp => {
          this.users = resp.filter(function(u) {
            return u.id != iduser;
          }).sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          });
        },
        error => {console.error('An error occurred in dashboard component, navigating to login: ', error);}
      );
  }
}
