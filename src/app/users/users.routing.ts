import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { UserListComponent } from "./user-list.component";
import { UserFormComponent } from "./user-form.component";

const usersRoutes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'add', component: UserFormComponent},
  {path: 'edit/:id', component: UserFormComponent}
];

export const usersRoutingProviders: any[] = [];
export const usersRouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);
