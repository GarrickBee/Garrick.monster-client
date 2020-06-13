import { Component, Input } from '@angular/core';
import { ApiService, ArticleService } from '@core/services';
import { Article } from '@core/models';


@Component({
  selector: 'app-blog-horizontal',
  templateUrl: './blog-horizontal.component.html',
  styleUrls: ['./blog-horizontal.component.scss']
})
export class BlogHorizontalComponent {

  @Input() articles: any;

  // article: Article[];
  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {

  }


}
