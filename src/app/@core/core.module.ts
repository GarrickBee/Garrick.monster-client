import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApiService,
  ArticleService,
  ToastService,
} from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    ArticleService,
    ToastService
  ]
})
export class CoreModule { }
