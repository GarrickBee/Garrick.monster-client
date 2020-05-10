import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '@core/models';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: any;
  articleContent: HTMLElement;
  href: string;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.generateArticle();

    this.href = this.router.url;
    console.log(this.router.url);
  }

  // Generate Article 
  generateArticle() {
    // Article Resolver 
    this.activatedRoute.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;
      }
    );
  }
}
