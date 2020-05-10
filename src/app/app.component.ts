import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ngx-loading-bar></ngx-loading-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
}
