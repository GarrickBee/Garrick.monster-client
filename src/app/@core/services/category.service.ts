import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Article } from '@core/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(
    private apiService: ApiService
  ) { }


  getCategories(): Observable<{ articles: Article[], articlesCount: Number }> {
    return this.apiService.get('/category');
  }

  getCategory(slug: string): Observable<Article> {
    return this.apiService.get(`/category/${slug}`);
  }

  // getFeatureArticles(): Observable<Article> {
  //   return this.apiService.get('/article/feature').pipe(map(data => data.articles));
  // }

}
