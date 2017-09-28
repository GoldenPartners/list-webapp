import { AuthService } from "./auth.service";

export class AuthComponent {
  constructor(protected service: AuthService) { }

  checkRole(roles: string[]): boolean {
    return this.service.currentUserIsSomeRole(roles);
  }
}
