
/**
 * @file Home Component 
 * @author Garrick <https://github.com/garrickbee>
 */

import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';
import { ToastService, ArticleService, SeoService } from '@core/services';
import { Article } from '@core/models';
import { fadeAnimation } from '@shared/animations/fade-animation';


// Materialize Init
declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeAnimation]
})

export class HomeComponent implements OnInit, AfterViewInit {

  articles: Article[];
  categories: any;
  featureArticles: any;
  sliderImages: any;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
    private seoService: SeoService,
  ) {
  }

  /** 
   * Init
   */
  ngOnInit(): void {

    this.generateArticleList();
    this.getFeatureArticles();
  }
  /**
   * Init After view 
   */
  ngAfterViewInit(): void {
    this.initSwiper();
  }

  /**
   * Get Feature Articles Data
   */
  getFeatureArticles() {
    this.activatedRoute.data.subscribe(
      (data) => {
        this.featureArticles = data.pagesData.featureArticles;
        this.sliderImages = this.featureArticles.map((x: { image: any; }) => x.image);
      }
    );
  }
  /**
   * Get Articles
   */
  generateArticleList() {
    // Query Article 
    this.articleService.getArticles().subscribe(data => {
      this.articles = data.articles;
    });
  }

  /**
   * Init Swiper JS
   */
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

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
