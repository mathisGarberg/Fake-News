import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Article, ArticleService } from 'src/app/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-manage-article',
  templateUrl: './manage-article.component.html',
  styleUrls: ['./manage-article.component.scss']
})
export class ManageArticleComponent implements OnInit {
  title: string;
  manageArticleType: string;
  manageArticleForm: FormGroup;
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private articleService: ArticleService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.article) {
        this.title = 'Edit Article';
        this.manageArticleType = 'editArticle';
        this.populateForm(data.article);
      } else {
        this.manageArticleType = 'addArticle';
        this.title = 'Add Article';
      }
    });
  }

  createForm(): void {
    this.manageArticleForm = this.formBuilder.group({
      id: [''],
      title: [''],
      body: [''],
      description: [''],
      author: ['Mathis Garberg'], // fetch username here instead
      image: ['']
    });
  }

  submitForm(): void {
    this.isSubmitting = true;

    const values = this.manageArticleForm.value;

    this.articleService[this.manageArticleType](values).pipe(
      finalize(() => {
        this.isSubmitting = false;
        this.router.navigate(['/articles']);
      })
    ).subscribe();
  }

  populateForm(article: Article): void {
    Object.keys(article).map(key => {
      if (article[key] instanceof Array) {
        this.manageArticleForm.controls[key].setValue(article[key][0].id);
      } else if (this.manageArticleForm.controls[key]) {
        this.manageArticleForm.controls[key].setValue(article[key]);
      }
    });
  }

}
