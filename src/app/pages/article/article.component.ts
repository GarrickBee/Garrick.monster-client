import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@core/models';
import { ArticleService } from '@core/services';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: any;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  // Generate Article 
  getArticle() {
    // Article Resolver 
    this.activatedRoute.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;
      }
    );
  }
}
