import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@core/models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  articles: any;


  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.generateArticleList();
  }

  generateArticleList() {
    // Query Article 
    this.activatedRoute.data.subscribe(
      (data) => {
        this.articles = data.categoryData.articles.articles;
      }
    );

  }

}
