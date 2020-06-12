import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import {
  ApiService,
  ArticleService,
  ToastService,
  SeoService,
} from './services';

import { ImageErrorDirective } from './directives/image-error.directive';

@NgModule({
  declarations: [ImageErrorDirective],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    ArticleService,
    ToastService,
    SeoService,
    DatePipe
  ],
  exports: [
    ImageErrorDirective
  ]
})
export class CoreModule { }
