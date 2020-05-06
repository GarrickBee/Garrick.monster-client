import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from '@core/models';
import { ArticleService } from '@core/services';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: any;
  testing: any;




  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe(params => {
    //   const id = params['slug'];
    //   console.log(params['slug']);
    // });

    this.activatedRoute.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;
        console.log(this.article);
      }
    );


  }


}
