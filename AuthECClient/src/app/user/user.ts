import { Component } from '@angular/core';
import { Registration } from './registration/registration';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Registration, RouterOutlet],
  selector: 'app-user',
  styles: ``,
  templateUrl: './user.html',
})
export class User {}
