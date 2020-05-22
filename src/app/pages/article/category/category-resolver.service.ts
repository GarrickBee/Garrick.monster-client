import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Category } from '@core/models';
import { ArticleService, CategoryService } from '@core/services';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<Category> {

  constructor(
    private categoryService: CategoryService,
    private articleService: ArticleService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {


    return this.categoryService.getCategories()
      .pipe(
        catchError(error => {
          const message = `Page Retrieval error: ${error}`;
          console.error(message);
          return of({ product: null, error: message });
        })
      );

  }
}
