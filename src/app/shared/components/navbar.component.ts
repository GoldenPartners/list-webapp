import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../auth/auth.service";

declare var jQuery: any;
declare var $: any;

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
    $(".button-collapse").sideNav();
  }

  ngDoCheck() {
    this.loged = this.authService.isLogged();
  }

  checkRole(roles: string[]): boolean {
    // var result: boolean = false;
    //
    // roles.forEach(role => {
    //   if (this.authService.currentUserIs(role)) {
    //     result = true;
    //   }
    // });
    //
    // return result;
    return this.authService.currentUserIsSomeRole(roles);
  }

  logout() {
    this.authService.logout();
    this.loged = false;
    this.router.navigate(['/login']);
  }
}
