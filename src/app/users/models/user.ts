import { UserRole } from "./user-role";

export class User {
  constructor(
    public id: String,
    public email: String,
    public password: String,
    public name: String,
    public phone: String,
    public enabled: Boolean,
    public roles: Array<UserRole>
  ) {}
}
