
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
  <app-header class='blog-theme'></app-header>
  <main>
      <div class="container blog-theme">
          <div class="row">
              <app-sidebar></app-sidebar>
              <router-outlet></router-outlet>
              <app-aside></app-aside>
          </div>
      </div>
  </main>
  <app-footer class='blog-theme'></app-footer>`,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
