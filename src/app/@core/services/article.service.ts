import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Article } from '@core/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private apiService: ApiService
  ) { }

  getArticles(): Observable<{ article: Article[] }> {
    return this.apiService.get('/article');

  }

  getArticle(slug: string): Observable<Article> {
    return this.apiService.get(`/article/${slug}`);
  }
}
