import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@core/models';

@Component({
  selector: 'article-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input()
  article: any;
  href: string;
  constructor() { }

  ngOnInit(): void {
    this.href = window.location.href;

  }

}
