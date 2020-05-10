import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { ArticleResolver } from '@core/resolver';
import { PageResolver } from '@core/resolver/page-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    resolve: {
      pageData: PageResolver
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
