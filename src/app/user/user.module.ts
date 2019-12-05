import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListModule } from './user-list/user-list.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormModule } from './user-form/user-form.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserListModule,
    UserFormModule
  ],
  exports: []
})

export class UserModule { }
