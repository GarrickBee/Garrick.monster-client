import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';






@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ArticleModule { }