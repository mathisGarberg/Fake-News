import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ManageArticleComponent } from './manage-article/manage-article.component';
import { ArticleResolver } from './article-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: 'edit/:id',
    component: ManageArticleComponent,
    resolve: {
      article: ArticleResolver
    }
  },
  {
    path: 'add',
    component: ManageArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
