import { Component, signal } from '@angular/core';
import { User } from './user/user';

@Component({
  imports: [User],
  selector: 'app-root',
  styles: [],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AuthECClient');
}
