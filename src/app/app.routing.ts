import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CanAccessGuard } from "./shared/services/can-access.guard";

// Components
import { LoginComponent } from "./auth/login.component";
import { HomeComponent } from "./home/home.component";
import { UserListComponent } from "./users/components/user-list.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [CanAccessGuard],
    children: [
      {path: '', redirectTo: 'events', pathMatch: 'full'},
      {path: 'events', loadChildren: 'app/events/events.module#EventsModule', canLoad: [CanAccessGuard]}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: HomeComponent, canActivate: [CanAccessGuard]}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// TODO: probar cargar un componente conmun para el path '' y dejar la carga del children module para la accion de un boton del navbar!
