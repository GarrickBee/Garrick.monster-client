import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // generateArticleList() {
  //   // Query Article 
  //   this.articleService.getArticles().subscribe(data => {
  //     this.articles = data.articles;
  //   });
  // }

}
