import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public title: string;

  constructor(
    private router: Router
  ) {
    this.title = 'Book review'
  }

  goToCart(): void {
    this.router.navigate(['/mycart']);
  }

  ngOnInit() {

  }

}
