import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CanActivateGuard } from "./guards/canactivate.guard";

// Components
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from "./components/error.component";
import { LoginComponent } from "./components/login.component";

const appRoutes: Routes = [
//{path: '', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
//{path: 'securepath' component: SecureComponent, canActivate: [CanActivateGuard]},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
