import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '@core/models';
import { SeoService } from '@core/services';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: any;
  articleContent: HTMLElement;
  href: string;
  error: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.generateArticle();
    // this.seoService.updateMetaTags();
  }

  // Generate Article 
  generateArticle() {
    // Article Resolver 
    this.activatedRoute.data.subscribe(
      (data) => {

        if (data.article.article.error) {
          this.error = data.article.article;
        } else {
          this.article = data.article.article;
        }
      }
    );
  }
}
