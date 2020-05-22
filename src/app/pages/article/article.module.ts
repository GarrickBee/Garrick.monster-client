import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

// Mark Down JS -
import { MarkdownModule } from 'ngx-markdown';

import { ArticleComponent } from './article.component';
import { HttpClient } from '@angular/common/http';

import { DetailsComponent } from './details/details.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [ArticleComponent, DetailsComponent, CategoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ArticleRoutingModule,
    MarkdownModule.forRoot(
      { loader: HttpClient, }
    ),
  ]
})
export class ArticleModule { }
