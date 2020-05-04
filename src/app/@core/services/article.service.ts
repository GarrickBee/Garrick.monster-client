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

  getArticles(): Observable<Article> {
    return this.apiService.get('/articles')
      .pipe(map(data => data.article));
  }

  get(slug: string): Observable<Article> {
    return this.apiService.get('/articles/' + slug)
      .pipe(map(data => data.article));
  }
}
