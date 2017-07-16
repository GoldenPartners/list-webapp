import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { usersRouting, usersRoutingProviders } from './users.routing';

// Components
import { UserListComponent } from "./user-list.component";
import { UserFormComponent } from "./user-form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    usersRouting
  ],
  declarations: [
    UserListComponent,
    UserFormComponent
  ],
  providers: [usersRoutingProviders]
})
export class UsersModule { }
