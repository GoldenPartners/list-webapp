import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CanActivateGuard } from "../shared/services/canactivate.guard";

// Components
import { UserComponent } from './components/user.component';
import { UserListComponent } from "./components/user-list.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UserListComponent, canActivate: [CanActivateGuard]},
  {path: 'user', component: UserComponent, canActivate: [CanActivateGuard]}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
