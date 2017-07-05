import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { UsersComponent } from "./components/users.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsersComponent
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
