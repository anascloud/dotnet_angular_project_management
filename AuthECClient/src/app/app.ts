import { Component, signal } from '@angular/core';
import { User } from './user/user';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, User],
  selector: 'app-root',
  styles: [],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AuthECClient');
}
