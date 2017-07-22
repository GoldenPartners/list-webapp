import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./user.service";
import { GLOBAL } from "../shared/services/global";
import { User } from "./models/user";
import { UserRole } from "./models/user-role";
import { Role } from "./models/role";

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'user',
    templateUrl: './user-form.component.html',
    providers: [UserService]
})
export class UserFormComponent implements OnInit {
  form_title: string;
  model: any = {};
  roles: Role[];
  user: User;
  loading: boolean;
  error: string;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.form_title = 'Register User!';
    this.roles = this.userService.getRoles();
    this.user = new User('', '', '', '', '', false, new Array<UserRole>());
    this.loading = false;
    this.error = '';
  }

  ngOnInit() {
    $('select').material_select();
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id !== undefined) {
          this.userService.getUser(id)
            .then(
              resp => { this.user = resp },
              error => {console.error('An error occurred in dashboard component, navigating to login: ', error);}
            );
        }
      }
    );
  }

  register() {
    console.log('Add User');
    console.log(this.user);
  }
}
