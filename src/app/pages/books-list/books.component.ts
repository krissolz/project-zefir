import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from 'src/app/core/models';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksListComponent implements OnInit {

  public booksTitle: string;
  public books: Book[];
  public howMany: number;
  public loading: boolean;

  constructor(
    private router: Router,
    private bs: BooksService
  ) {
    this.booksTitle = 'Books list';
    this.books = [];
    this.howMany = 5;
    this.loading = true;
  }

  goToCart(): void {
    this.router.navigate(['/mycart']);
  }

  ngOnInit() {
    
  }

}
