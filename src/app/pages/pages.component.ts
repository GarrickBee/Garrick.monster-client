
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@core/models';
declare const M: any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }
}
