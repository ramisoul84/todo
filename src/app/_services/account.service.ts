import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as bcrypt from 'bcryptjs';
import { v4 } from 'uuid';
import { User } from '../_models/user';

const users: User[] = JSON.parse(localStorage.getItem('todo_users')!) || [];

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject = new BehaviorSubject<string | null>(
    localStorage.getItem('todo_user')
  );
  public user$ = this.userSubject.asObservable();

  async login(user: User): Promise<boolean> {
    const exists = users.find((x) => x.email === user.email);
    if (exists) {
      const correct = await bcrypt.compare(user.password, exists.password);
      if (correct) {
        this.userSubject.next(exists.firstName);
        this.user$.subscribe((value) =>
          localStorage.setItem('todo_user', value ? value : '')
        );
        setTimeout(() => {
          this.logout();
        }, 60 * 60 * 1000);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  async register(user: User): Promise<boolean> {
    const exists = users.find((x) => x.email === user.email);
    if (exists) {
      return false;
    } else {
      user.password = await bcrypt.hash(user.password, 10);
      user.id = v4();
      if (users.length === 0) {
        user.isAdmin = true;
      } else {
        user.isAdmin = false;
      }
    }
    users.push(user);
    localStorage.setItem('todo_users', JSON.stringify(users));
    return true;
  }

  logout() {
    this.userSubject.next('');
    localStorage.removeItem('todo_user');
  }
}
