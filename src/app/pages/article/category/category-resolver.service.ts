import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Category, ArticleListConfig } from '@core/models';
import { ArticleService, CategoryService } from '@core/services';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<Category> {

  config: ArticleListConfig;

  constructor(
    private categoryService: CategoryService,
    private articleService: ArticleService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    this.config = {
      filters: {
        category: route.params['categorySlug']
      }
    }

    let articles = this.articleService.queryArticles(this.config)
      .pipe(
        catchError(error => {
          const message = `Page Retrieval error: ${error}`;
          console.error(message);
          return of({ product: null, error: message });
        })
      );

    return forkJoin({
      articles: articles,
    });



  }
}
