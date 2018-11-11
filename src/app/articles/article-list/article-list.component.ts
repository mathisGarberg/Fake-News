import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { ArticleService } from '../../core/services/article.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Array<Article>>;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articles$ = this.loadArticles();
  }

  loadArticles(): Observable<Array<Article>> {
    return this.articleService.findAllArticles();
  }

}
