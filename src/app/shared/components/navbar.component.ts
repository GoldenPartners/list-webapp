import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'nav-bar',
  templateUrl: '../views/navbar.component.html',
  providers: [AuthService]
})
export class NavBarComponent {
  public brand: String;
  public loged: Boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.brand = 'list!';
  }

  ngDoCheck() {
    this.loged = this.authService.isLogged();
  }

  checkRole(role: String): Boolean {
    return this.authService.currentUserIs(role);
  }

  logout() {
    this.authService.logout();
    this.loged = false;
    this.router.navigate(['/login']);
  }
}
