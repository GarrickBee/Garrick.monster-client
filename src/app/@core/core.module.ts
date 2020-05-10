import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApiService,
  ArticleService,
} from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    ArticleService
  ]
})
export class CoreModule { }
