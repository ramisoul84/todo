import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [UserDetailsComponent, UsersListComponent],
})
export class UserModule {}
