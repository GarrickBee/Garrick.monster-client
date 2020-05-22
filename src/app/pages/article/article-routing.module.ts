import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { CategoryComponent } from './category/category.component';
import { ArticleResolver } from './article-resolver.service';
import { CategoryResolver } from './category/category-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent
  },
  {
    path: 'category/:categorySlug',
    pathMatch: 'prefix',
    component: CategoryComponent,
    resolve: {
      categoryData: CategoryResolver
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
