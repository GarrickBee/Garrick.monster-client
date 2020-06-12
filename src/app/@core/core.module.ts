import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import {
  ApiService,
  ArticleService,
  ToastService,
  SeoService,
} from './services';

import { ImageErrorDirective } from './directives/image-error.directive';
import { ImageFormatPipe } from './pipes/image-format.pipe';

@NgModule({
  declarations: [
    ImageErrorDirective,
    ImageFormatPipe,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ApiService,
    ArticleService,
    ToastService,
    SeoService,
    DatePipe,
  ],
  exports: [
    ImageErrorDirective,
    ImageFormatPipe,
  ]
})
export class CoreModule { }
