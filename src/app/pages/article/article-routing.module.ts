import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleResolver } from '@core/resolver';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  {
    path: ':slug',
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
