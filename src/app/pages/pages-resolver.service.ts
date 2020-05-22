import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Article, ArticleListConfig } from '@core/models';
import { ArticleService, CategoryService } from '@core/services';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PagesResolver implements Resolve<any> {

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    // Query Feature Article 
    let featureArticles = this.articleService.getFeatureArticles()
      .pipe(
        catchError(error => {
          const message = `Page Retrieval error: ${error}`;
          console.error(message);
          return of({ product: null, error: message });
        })
      );

    let categories = this.categoryService.getCategories()
      .pipe(catchError(() => this.router.navigateByUrl('/')));

    return forkJoin({
      featureArticles: featureArticles,
      categories: categories
    });
  }
}
