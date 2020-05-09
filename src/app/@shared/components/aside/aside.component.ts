import { Component, OnInit } from '@angular/core';
import { Article } from '@core/models';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  featureArticles: Article;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getFeatureArticles();

  }

  getFeatureArticles() {
    // Page Resolver
    this.activatedRoute.data.subscribe(
      (data: { pageData: [Article] }) => {
        console.log(data.pageData[0]);
        this.featureArticles = data.pageData[0];
      }
    );
  }

}
