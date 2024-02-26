import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public title: string;

  constructor(
    private router: Router,
  ) {
    this.title = 'My cart';
  }

  goToHome():void {
    this.router.navigate(['/']);
  }

  ngOnInit() {

  }

}
