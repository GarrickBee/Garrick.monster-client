import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Article, ArticleListConfig } from '@core/models';
import { map } from 'rxjs/operators';
import { Observable, empty, of } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(
    private apiService: ApiService
  ) { }


  queryArticles(config: ArticleListConfig): Observable<{ articles: Article[], total: number, pages: number, page: number }> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
      .forEach((key) => {
        params[key] = config.filters[key];
      });

    return this.apiService
      .get(
        '/articles' + ((config.type === 'feed') ? '/feed' : ''),
        new HttpParams({ fromObject: params })
      );
  }

  getArticles(): Observable<{ articles: Article[], total: number, pages: number, page: number }> {

    return this.apiService.get('/articles');
  }

  getArticle(slug: string): Observable<Article> {
    return this.apiService.get(`/articles/${slug}`);
  }

  getFeatureArticles(): Observable<Article> {
    return this.apiService.get('/articles/feature').pipe(map(data => data.articles));
  }

}
