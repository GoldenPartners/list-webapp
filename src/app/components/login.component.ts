import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: '../views/login.component.html',
    providers: [AuthService]
})
export class LoginComponent {
  model: any = {};
  loading = false;
  error = '';

  @Output()
  onLogin = new EventEmitter();

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
            this.informSuccessLogin();
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

  informSuccessLogin() {
    console.log('informamos el login correcto mediante el evento onLogin');
    this.onLogin.emit({loged: true});
  }
}
