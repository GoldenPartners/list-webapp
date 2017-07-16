import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLogged()) {
        // logged in so return true
        return true;
    }
    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): boolean {
    // let url = `/${route.path}`;
    return this.authService.isLogged();
  }
}
