import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { UserComponent } from "./components/user.component";
import { UserListComponent } from "./components/user-list.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
    UserListComponent
  ],
  exports: [
    UserComponent,
    UserListComponent
  ]
})
export class UsersModule { }
