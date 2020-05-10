import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Article } from '@core/models';
import { ArticleService } from '@core/services';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<Article> {

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.articleService.getArticle(route.params['slug'])
      .pipe(catchError(() => this.router.navigateByUrl('/')));
  }
}
