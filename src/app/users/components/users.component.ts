import { Component } from '@angular/core';

@Component({
    selector: 'users',
    templateUrl: '../views/users.component.html'
})
export class UsersComponent {
  msg: String;

  constructor() {
    this.msg = 'Users View !!!';
  }
}
