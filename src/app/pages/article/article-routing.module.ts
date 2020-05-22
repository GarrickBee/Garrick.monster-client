import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleResolver } from '@core/resolver';
import { ArticleComponent } from './article.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent
  },
  {
    path: 'category/:category',
    pathMatch: 'prefix',
    component: CategoryComponent,
    resolve: {
      article: ArticleResolver
    }
  },
  {
    path: ':articleSlug',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolver
    }
  }
];
//Document

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
