import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../services/auth.service";

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

  ngOnInit() {
    this.loged = this.authService.isLoged();
  }

  logout() {
    console.log('logout..');
    this.authService.logout();
    this.router.navigate(['']);
  }
}
