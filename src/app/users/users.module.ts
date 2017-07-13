import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { usersRouting, usersRoutingProviders } from './users.routing';

// Components
import { UserComponent } from "./components/user.component";
import { UserListComponent } from "./components/user-list.component";

@NgModule({
  imports: [
    CommonModule,
    usersRouting
  ],
  declarations: [
    UserComponent,
    UserListComponent
  ],
  // exports: [
  //   UserComponent,
  //   UserListComponent
  // ],
  providers: [usersRoutingProviders]
})
export class UsersModule { }
