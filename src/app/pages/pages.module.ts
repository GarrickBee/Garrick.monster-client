import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ArticleModule } from './article/article.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ArticleModule,
    HomeModule,
    PagesRoutingModule
  ],
  exports: [PagesRoutingModule]
})
export class PagesModule { }
