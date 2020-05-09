import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { PagesComponent } from './pages.component';
import { BrowserModule } from '@angular/platform-browser';
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
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'blog',
        component: ArticleComponent,
      },
      {
        path: 'blog/:slug',
        component: ArticleComponent,
        resolve: {
          article: ArticleResolver
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
