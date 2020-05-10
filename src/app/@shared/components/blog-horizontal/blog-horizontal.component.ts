import { Component } from '@angular/core';
import { ApiService, ArticleService } from '@core/services';


@Component({
  selector: 'app-blog-horizontal',
  templateUrl: './blog-horizontal.component.html',
  styleUrls: ['./blog-horizontal.component.scss']
})
export class BlogHorizontalComponent {
  articles: any;


  // article: Article[];
  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    // Query Article 
    this.articleService.getArticles().subscribe(data => {
      this.articles = data.articles;
    });
  }
}
