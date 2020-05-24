import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { PagesResolver } from './pages-resolver.service';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    resolve: {
      pagesData: PagesResolver,
    },
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      {
        path: 'article',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
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
