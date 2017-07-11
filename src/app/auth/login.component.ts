import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})
export class LoginComponent {
  model: any = {};
  loading = false;
  error = '';

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password).subscribe(
      result => {
        if (result === true) {
            // login successful
            this.router.navigate(['home']);
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
}
