import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticationGuard } from "./shared/services/authentication.guard";

// Components
import { LoginComponent } from "./auth/login.component";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./shared/components/error.component";
import { WelcomeComponent } from "./home/welcome.component";
import { SettingsComponent } from "./settings/settings.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthenticationGuard],
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'settings', component: SettingsComponent, canActivate: [AuthenticationGuard]},
      {path: 'users', loadChildren: 'app/users/users.module#UsersModule', canLoad: [AuthenticationGuard]},
      {path: 'events', loadChildren: 'app/events/events.module#EventsModule', canActivate: [AuthenticationGuard]}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent, canActivate: [AuthenticationGuard]}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
