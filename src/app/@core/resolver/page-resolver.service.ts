import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Article, ArticleListConfig } from '@core/models';
import { ArticleService } from '@core/services';
import { Observable, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PageResolver implements Resolve<any> {

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    // Query Feature Article 
    var config: ArticleListConfig = {
      type: 'feature',
      filters: {
        limit: 3
      }
    }
    let articleFeature = this.articleService.getFeatureArticles(config).pipe(catchError(() => this.router.navigateByUrl('/')));

    return forkJoin([articleFeature]);
  }
}
