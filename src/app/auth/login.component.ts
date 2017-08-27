import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from "../users/user.service";

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [AuthService, UserService]
})
export class LoginComponent {
  model: any = {};
  loading = false;
  error = '';
  public emailToResetPass: string;

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    $('.modal').modal();
    this.authService.logout();
  }

  public login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password).subscribe(
      result => {
        if (result === true) {
            // login successful
            this.router.navigate(['']);
        } else {
            // login failed
            this.error = 'Username or password is incorrect';
            this.loading = false;
        }
      }, error => {
        this.loading = false;
        this.error = error;
      });
  }

  public resetPassword() {
    console.log('reset password: ' + this.emailToResetPass);
    this.userService.resetPassword(this.emailToResetPass);
  }
}
