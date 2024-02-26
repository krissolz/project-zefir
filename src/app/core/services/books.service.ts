import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() {
  }

  width$(): number{
    return Math.max( document.body.offsetWidth, document.documentElement.offsetWidth );
  }

}