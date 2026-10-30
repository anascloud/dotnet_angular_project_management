import { Component } from '@angular/core';
import { Registration } from './registration/registration';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { trigger, style, transition, animate, query } from '@angular/animations';

@Component({
  imports: [Registration, RouterOutlet],
  selector: 'app-user',
  styles: ``,
  templateUrl: './user.html',
  animations: [
    trigger('routerFadeIn', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0 }),
          animate('1s ease-in-out', style({ opacity: 1 }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class User {
  constructor(private context: ChildrenOutletContexts) { }
  getRouteUrl() {
    return this.context.getContext('primary')?.route?.url;
  }
}
