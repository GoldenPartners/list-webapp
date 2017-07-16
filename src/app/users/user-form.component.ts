import { Component } from '@angular/core';
import { User } from "./models/user";

@Component({
    selector: 'user',
    templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  msg: String;
  model: any = {};
  loading = false;
  error = '';

  constructor() {
    this.msg = 'Users View !!!';
  }

  register() {
    console.log('Add User');
  }
}
