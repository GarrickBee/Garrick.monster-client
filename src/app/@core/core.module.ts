import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApiService,
  ArticleService,
  ToastService,
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
  ],
  exports: [
    ImageErrorDirective
  ]
})
export class CoreModule { }
