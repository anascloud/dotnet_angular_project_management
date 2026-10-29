import { Component } from '@angular/core';
import { Registration } from './registration/registration';

@Component({
  imports: [Registration],
  selector: 'app-user',
  styles: ``,
  templateUrl: './user.html',
})
export class User {}
