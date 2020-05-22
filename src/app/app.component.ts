import { Component, OnInit } from '@angular/core';
import { SeoService } from '@core/services';

@Component({
  selector: 'app-root',
  template: `
  <ngx-loading-bar></ngx-loading-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private seoService: SeoService
  ) { }

  ngOnInit() {
    // this.seoService.addMetaTags();
  }
}
