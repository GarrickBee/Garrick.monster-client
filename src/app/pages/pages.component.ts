
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@core/models';
declare const M: any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  featureArticles: Article;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.generateFeatureArtiles();
  }


  generateFeatureArtiles() {
    // Page Resolver
    this.activatedRoute.data.subscribe(
      (data: { pageData: [Article] }) => {
        this.featureArticles = data.pageData[0];
      }
    );
  }
}
