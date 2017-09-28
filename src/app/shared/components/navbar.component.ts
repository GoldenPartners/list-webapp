import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthComponent } from "../../auth/auth.component";
import { AuthService } from "../../auth/auth.service";

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'nav-bar',
  templateUrl: '../views/navbar.component.html',
  providers: [AuthService]
})
export class NavBarComponent extends AuthComponent {
  public brand: String;
  public loged: Boolean;

  constructor(private authService: AuthService, private router: Router) {
    super(authService);
    this.brand = 'list!';
  }

  ngOnInit() {
    $(".button-collapse").sideNav();
  }

  ngDoCheck() {
    this.loged = this.authService.isLogged();
  }

  logout() {
    this.authService.logout();
    this.loged = false;
    this.router.navigate(['/login']);
  }
}
