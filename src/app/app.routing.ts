import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CanActivateGuard } from "./shared/services/canactivate.guard";

// Components
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./shared/components/error.component";
import { LoginComponent } from "./auth/login.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [CanActivateGuard],
    children: [
      {path: '', loadChildren: 'app/users/users.module#UsersModule', canLoad: [CanActivateGuard]}
    ]
  },
  {path: '**', component: ErrorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [CanActivateGuard]}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
