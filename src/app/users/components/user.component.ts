import { Component } from '@angular/core';

@Component({
    selector: 'user',
    templateUrl: '../views/user.component.html'
})
export class UserComponent {
  msg: String;

  constructor() {
    this.msg = 'Users View !!!';
  }
}
