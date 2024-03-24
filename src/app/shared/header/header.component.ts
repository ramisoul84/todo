import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  user: string | null = '';

  constructor(private router: Router, private as: AccountService) {}

  ngOnInit(): void {
    this.as.user$.subscribe((data) => (this.user = data));
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.as.logout();
    this.router.navigate(['/login']);
  }
}
