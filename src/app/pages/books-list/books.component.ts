import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/core/models';
import { HttpClient  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksListComponent implements OnInit {

  public booksTitle: string;
  public books: Book[];
  public howMany: number;

  constructor(
    private router: Router,
    private http: HttpClient, 
  ) {
    this.booksTitle = 'Books list';
    this.books = [];
    this.howMany = 5;
  }

  goToCart(): void {
    this.router.navigate(['/mycart']);
  }

  ngOnInit() {
    this.http
      .get<Book[]>(environment.getUrl)
      .subscribe({
        next: res => this.books = res,
        error: err => console.log('Error occured: ', err),
        complete: () => console.log('Books: ', this.books)
      });
  }

}
