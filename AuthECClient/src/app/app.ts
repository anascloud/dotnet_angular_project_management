import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';

@Component({
  imports: [RouterOutlet, User],
  selector: 'app-root',
  styles: [],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AuthECClient');
}
