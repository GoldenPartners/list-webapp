import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user";

@Component({
    selector: 'user-info',
    templateUrl: './user-info.component.html',
    providers: [AuthService]
})
export class UserInfoComponent implements OnInit {
  private model: User;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.model = this.authService.getLoggedUser();
  }

  public checkRole(roles: string[]): boolean {
    return this.authService.currentUserIsSomeRole(roles);
  }
}
