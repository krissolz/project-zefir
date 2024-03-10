import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from 'src/app/core/models';
import { BooksService } from 'src/app/core/services/books.service';

import { environment } from 'src/environments/environment';

const more: number = environment.more;

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
  cart: Book[];
  total: number;

  constructor(
    private router: Router,
    private bs: BooksService
  ) {
    this.booksTitle = 'Books list';
    this.books = [];
    this.howMany = more;
    this.loading = true;
    this.cart = [];
    this.total = 0;
  }

  viewMore(): void {
    this.howMany += more;
  }

  addToCart(id: string){
    // this.store$.dispatch(new StoreActions.AddToCart(id));
  }

  removeFromCart(id: string): void {
    // this.store$.dispatch(new StoreActions.RemoveFromCart(id));
  }

  checkBook(id: string): boolean {
    // return this.book$.checkCart(id);
    return true;
  }

  getUnic(cart: Book[]): Book[]{
    return this.bs.getUnicBooks(cart);
  }

  getNumber(id: string) : number {
    return this.bs.getCopiesNumber(id);
  }

  goToCart(): void {
    this.router.navigate(['/mycart']);
  }

  ngOnInit() {
    this.bs.getBooks().subscribe({
      next: res => this.books = res,
      error: err => console.log('Error occured: ', err),
      complete: () => {
        this.loading = false;
        this.bs.books$ = this.books;
        console.log('Books: ', this.bs.books$);
      }
    });
  }

}
