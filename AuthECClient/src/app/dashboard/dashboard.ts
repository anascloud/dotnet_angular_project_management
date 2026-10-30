import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styles: ``,
  templateUrl: './dashboard.html',
})
export class Dashboard {
  constructor(private router: Router) { }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/signin');
  }
}
