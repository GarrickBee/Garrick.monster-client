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

  getFeatureArticles(): Observable<Article> {
    return this.apiService.get('/article/feature').pipe(map(data => data.articles));
  }

}
