import { Component, OnInit, Input } from '@angular/core';
import { Article, Category } from '@core/models';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Input()
  featureArticles: [Article];
  @Input()
  categories: [Category];


  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }


}
