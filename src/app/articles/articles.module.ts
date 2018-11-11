import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { ArticleResolver } from './article-resolver.service';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ManageArticleComponent } from './manage-article/manage-article.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ArticleComponent } from './article.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ArticlesRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ArticleListComponent,
    ManageArticleComponent,
    ArticleComponent
  ],
  providers: [
    ArticleResolver
  ]
})
export class ArticlesModule { }
