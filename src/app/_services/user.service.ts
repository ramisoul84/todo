import { Injectable } from '@angular/core';
import { User } from '../_models/user';

const users: User[] = JSON.parse(localStorage.getItem('todo_users')!) || [];

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers() {
    return users;
  }

  createUser() {
    users.push({
      id: 'sdsd',
      firstName: 'new',
      lastName: 'new',
      email: 'email',
      password: 'sds',
      isAdmin: false,
    });
    localStorage.setItem('todo_users', JSON.stringify(users));
  }

  deleteUser(id: string) {}
}
