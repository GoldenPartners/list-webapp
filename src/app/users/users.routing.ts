import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { UserComponent } from './components/user.component';
import { UserListComponent } from "./components/user-list.component";

const usersRoutes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: UserListComponent},
  {path: 'add', component: UserComponent},
  {path: 'edit/:id', component: UserComponent}
];

export const usersRoutingProviders: any[] = [];
export const usersRouting: ModuleWithProviders = RouterModule.forRoot(usersRoutes);
