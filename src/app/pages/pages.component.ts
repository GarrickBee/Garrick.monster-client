
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, Category } from '@core/models';


declare const M: any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],

})
export class PagesComponent implements OnInit {
  featureArticles: [Article];
  categories: [Category];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  /**
   * Init
   */
  ngOnInit(): void {
    this.generatePageData();

  }

  /**
   * Get Categories,Feature Articles
   */
  generatePageData() {
    // Page Resolver
    this.activatedRoute.data.subscribe(
      (data) => {
        this.categories = data.pagesData.categories;
        this.featureArticles = data.pagesData.featureArticles;
      }
    );
  }
}
