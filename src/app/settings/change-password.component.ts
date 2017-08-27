import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { UserService } from "../users/user.service";

@Component({
    selector: 'change-password',
    templateUrl: './change-password.component.html',
    providers: [AuthService, UserService]
})
export class ChangePasswordComponent implements OnInit {
  public model: any;
  public msg: string;
  public success: boolean;
  public error: boolean;
  public loading: boolean;

  constructor(private authService: AuthService, private userService: UserService) {
    this.model = {};
    this.loading = this.success = this.error = false;
  }

  ngOnInit() { }

  public confirm() {
    this.loading = true;
    this.model.iduser = this.authService.getLoggedUser().id;
    console.log(this.model);

    this.userService.changePassword(this.model)
      .then(
        resp => {
          this.msg = "The password was changed correctly.";
          this.success = true;
          this.model = {};
          this.loading = false;
        },
        error => {
          this.msg = "Error: Your password could not be updated. The values ​​sent are not correct.";
          this.error = true;
          this.loading = false;
        }
      );
  }
}
