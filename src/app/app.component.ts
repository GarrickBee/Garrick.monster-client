import { Component, OnInit } from '@angular/core';
import { SeoService } from '@core/services';

@Component({
  selector: 'app-root',
  template: `
  <ngx-loading-bar [color] ="color" [height]="height" ></ngx-loading-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  color: string;
  height: string;
  constructor(
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.initLoadingBar();

  }

  initLoadingBar() {
    this.color = "#039be5";
    this.height = "2.5px";
  }
}
