
/**
 * @file Home Component 
 * @author Garrick <https://github.com/garrickbees>
 */

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
// import { ApiService } from '@core/services';

// Materialize Init
declare const M: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  currentDate: Date;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.carousel_init();
    this.currentDate = new Date();

    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      fadeEffect: {
        crossFade: true
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    });

  }

  carousel_init() {

    // Matereliaze caoursel
    // const elems = document.querySelector('.slider');
    // M.Slider.init(elems, {
    //   height: 300,
    //   indicators: false,
    // });

    // setInterval(function () {
    //   M.Carousel.getInstance(elems).next();
    // }, 3000);

  }

}
