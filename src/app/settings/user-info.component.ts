import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { AuthComponent } from "../auth/auth.component";
import { User } from "../auth/user";

@Component({
    selector: 'user-info',
    templateUrl: './user-info.component.html',
    providers: [AuthService]
})
export class UserInfoComponent extends AuthComponent implements OnInit {
  private model: User;

  constructor(private authService: AuthService) {
    super(authService);
  }

  ngOnInit() {
    this.model = this.authService.getLoggedUser();
  }
}
