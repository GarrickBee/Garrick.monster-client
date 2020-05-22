import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Category } from '@core/models';
import { ArticleService, CategoryService } from '@core/services';
import { Observable } from 'rxjs';
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

    if (route.params['categorySlug']) {
      // return this.categoryService.getCategory(route.params['categorSlug'])
      //   .pipe(catchError(() => this.router.navigateByUrl('/')));
    }

    return this.categoryService.getCategories()
      .pipe(catchError(() => this.router.navigateByUrl('/')));

  }
}
