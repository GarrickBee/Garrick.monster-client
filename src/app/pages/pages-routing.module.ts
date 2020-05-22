import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import {
  PageResolver,
  CategoryResolver
} from '@core/resolver';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    resolve: {
      articlesData: PageResolver,
      categoryData: CategoryResolver
    },
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      {
        path: 'article',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
