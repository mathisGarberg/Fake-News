import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Article, ArticleService } from '../core';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ArticleResolver implements Resolve<Article> {
  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    return this.articleService.findArticleById(route.params['id'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
