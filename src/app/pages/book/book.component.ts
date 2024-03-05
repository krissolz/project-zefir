import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/services/books.service';
import { Book } from 'src/app/core/models';

import { map } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public title: string;
  public books: Book[];
  public book: Book;
  public loading: boolean;
  public page: number;

  constructor(
    private bs: BooksService,
    private route: ActivatedRoute
  ) {
    this.title = 'Book review';
    this.books = [];
    this.book = this.books[0];
    this.loading = true;
    this.page = 1;
  }

  goToCart(): void {
    this.bs.goToPage('mycart');
  }

  getPageParam(): Observable<string | null> {
    return this.route.paramMap.pipe( map( (params: ParamMap) => params.get('id') ) );
  }

  ngOnInit() {

    combineLatest([this.getPageParam(), this.bs.getBooks()]).pipe( map( data => { 
      const page = data[0];
      const books = data[1];
      return { page, books }
     } ) ).subscribe({
      next: res => {
        console.log(res.page, res.books);
        this.page = res.page? +res.page : 1;
        this.books = res.books;
        this.book = this.books[this.page];
      },
      error: err => console.log('Error occured: ', err),
      complete: () => {
        this.loading = false;
      }
    });
    
  }

}
