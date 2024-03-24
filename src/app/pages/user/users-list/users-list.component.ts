import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/user';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  users!: User[];
  constructor(private us: UserService) {}

  ngOnInit(): void {
    console.log('get all users');
    this.users = this.us.getUsers();
  }

  addUser() {
    this.us.createUser();
  }
}
