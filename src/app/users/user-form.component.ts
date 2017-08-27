import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./user.service";
import { AuthService } from "../auth/auth.service";
import { GLOBAL } from "../shared/services/global";
import { User } from "./models/user";
import { UserRole } from "./models/user-role";

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'user',
    templateUrl: './user-form.component.html',
    providers: [UserService]
})
export class UserFormComponent implements OnInit {
  form_title: string;
  model: User;
  loading: boolean;
  isEdit: boolean;
  msg: string;
  success: boolean;
  error: boolean;
  change_boss: boolean;

  constructor(private route: ActivatedRoute, private userService: UserService, private authService: AuthService) {
    this.form_title = 'New User!';
    this.model = new User(null, '', null, '', '', true, null, new Array<UserRole>());
    this.loading = this.isEdit = this.success = this.error = this.change_boss = false;
  }

  ngOnInit() {
    $('select').material_select();
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id !== undefined) {
          this.form_title = 'Edit User!';
          this.isEdit = true;
          this.userService.getUser(id)
            .then(
              resp => { this.model = resp; },
              error => {
                console.error('An error occurred in dashboard component, navigating to login: ', error);
                this.msg = "The selected user could not be obtained.";
                this.error = true;
              }
            );
        }
      }
    );
  }

  public is(role: string) : boolean {
    let r = this.model.roles.find((item, index, arr) => {
      return item.role.toLowerCase() === role.toLowerCase();
    });
    return r ? true : false;
  }

  public confirm() {
    this.loading = true;

    if (!this.isEdit) {
      this.register();
    } else {
      this.edit();
    }
  }

  private register() {
    console.log('Add User');
    console.log(this.model);

    if (this.is('rrpp')) {
      this.assignBoss();
    }

    this.userService.createUser(this.model)
      .then(
        resp => {
          this.msg = "The user was created correctly.";
          this.success = true;
          this.model = new User(null, '', null, '', '', true, null, new Array<UserRole>());
          this.loading = false;
        },
        error => {
          console.error('An error occurred in dashboard component, navigating to login: ', error);
          this.msg = "Error: " + error;
          this.error = true;
          this.loading = false;
        }
      );
  }

  private edit() {
    console.log('Edit User');
    console.log(this.model);

    if (this.change_boss) {
      this.model.boss = new User(this.authService.getLoggedUser().id, this.authService.getLoggedUser().email, null, this.authService.getLoggedUser().name, null, null, null, null);
    }

    this.userService.updateUser(this.model)
      .then(
        resp => {
          this.model = resp;
          this.msg = "The user was updated correctly.";
          this.success = true;
          this.loading = false;
        },
        error => {
          console.error('An error occurred in dashboard component, navigating to login: ', error);
          this.msg = "Error: " + error;
          this.error = true;
          this.loading = false;
        }
      );
  }

  public checkRole(roles: string[]): boolean {
    return this.authService.currentUserIsSomeRole(roles);
  }

  public updateRoleList(role: string, status: boolean) {
    if (status) {
      this.addRole(role);
    } else {
      this.removeRole(role);
    }
  }

  private addRole(role: string) {
    this.model.roles.push(new UserRole(null, role));
  }

  private removeRole(role: string) {
    let index = this.model.roles.findIndex(r => r.role == role);
    this.model.roles.splice(index, 1);
  }

  private assignBoss() {
    this.model.boss.id = this.authService.getLoggedUser().id;
  }
}
