
/**
 * @file Home Component 
 * @author Garrick <https://github.com/garrickbee>
 */

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { ToastService, ArticleService } from '@core/services';
// import { ApiService } from '@core/services';

import { Cloudinary } from 'cloudinary-core';
import { Article } from '@core/models';

// Materialize Init
declare const M: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  currentDate: Date;
  articles: Article[];

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private toast: ToastService,
  ) { }

  ngOnInit(): void {

    this.currentDate = new Date();
    this.initSwiper();
    this.generateArticleList();
  }


  generateArticleList() {
    // Query Article 
    this.articleService.getArticles().subscribe(data => {
      this.articles = data.articles;
    });
  }

  getImage() {
    const test = new Cloudinary({ cloud_name: "beero", secure: true });
  }

  initSwiper() {

    new Swiper('.swiper-container', {
      loop: true,
      lazy: true,
      speed: 1500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
      mousewheel: true,
    });
  }


}
