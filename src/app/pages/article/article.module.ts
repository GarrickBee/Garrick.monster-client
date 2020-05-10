import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';
import { SharedModule } from '@shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ArticleRoutingModule,
    MarkdownModule.forRoot(),
  ]
})
export class ArticleModule { }
