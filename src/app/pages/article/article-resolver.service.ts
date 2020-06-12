import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Article } from '@core/models';
import { ArticleService } from '@core/services';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, defaultIfEmpty } from 'rxjs/operators';


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

    // if (route.params['slug']) {
    //   console.log(route.params['slug']);
    // }

    let article = this.articleService.getArticle(route.params['articleSlug'])
      .pipe(
        catchError(error => {
          const message = `Page Retrieval error: ${error}`;
          console.error(message);
          return of({ product: null, error: message });
        })
      );

    return forkJoin({
      article: article
    });

  }
}
