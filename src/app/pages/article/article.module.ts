import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

// Mark Down JS -
import { MarkdownModule } from 'ngx-markdown';

import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ArticleRoutingModule,
    MarkdownModule.forRoot(),
  ]
})
export class ArticleModule { }
