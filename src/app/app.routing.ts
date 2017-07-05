import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CanActivateGuard } from "./guards/canactivate.guard";

// Components
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from "./components/error.component";
import { LoginComponent } from "./components/login.component";
import { UsersComponent } from "./users/components/users.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent, canActivate: [CanActivateGuard]},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
