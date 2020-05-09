import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Article, ArticleListConfig } from '@core/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(
    private apiService: ApiService
  ) { }


  getArticles(): Observable<{ articles: Article[], articlesCount: Number }> {
    return this.apiService.get('/article');
  }

  getArticle(slug: string): Observable<Article> {
    return this.apiService.get(`/article/${slug}`);
  }

  getFeatureArticles(config: ArticleListConfig): Observable<Article> {
    var params = {};
    params = config;

    return this.apiService.get('/article/feature', new HttpParams({ fromObject: params })).pipe(map(data => data.articles));
  }

}
