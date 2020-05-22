
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, Category } from '@core/models';
declare const M: any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  featureArticles: [Article];
  categories: [Category];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.generatePageData();
  }


  generatePageData() {
    // Page Resolver
    this.activatedRoute.data.subscribe(
      (data: {
        articlesData: {
          articleFeature: any
        },
        categoryData: [Category]
      }) => {

        this.categories = data.categoryData;
        this.featureArticles = data.articlesData.articleFeature;
        console.log(data.articlesData.articleFeature);
      }
    );
  }
}
