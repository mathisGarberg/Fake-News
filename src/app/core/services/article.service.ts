import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Article } from '../models';

const routes = {
  article: (id: number) => `/api/articles/${id}`,
  articles: '/api/articles'
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private httpClient: HttpClient
  ) {}

  findAllArticles(): Observable<Array<Article>> {
    return this.httpClient.get<Array<Article>>(routes.articles);
  }

  findArticleById(id: number): Observable<Article> {
    return this.httpClient.get<Article>(routes.article(id));
  }

  editArticle(article: Article): Observable<any> {
    return this.httpClient.put(routes.article(article.id), article);
  }

  addArticle(article: Article): Observable<any> {
    return this.httpClient.post(routes.articles, article);
  }

}
