import { Injectable, OnInit } from '@angular/core';

import { Book } from 'src/app/core/models';
import { HttpClient  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable()
export class BooksService implements OnInit {

  public books$: Book[];
  private cBooks$: Book[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.books$ = [];
    this.cBooks$ = [];
  }

  width$(): number{
    return Math.max( document.body.offsetWidth, document.documentElement.offsetWidth );
  }

  getUnicBooks(books: Book[]): Book[]{
    return [...new Set(books)];
  }

  getCopiesNumber(id: string): number{
    let arr = this.cBooks$.filter(item => item.id === id);
    return arr.length;
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.getUrl);
  }

  getPageParam(): Observable<string | null> {
    return this.route.paramMap.pipe( map( (params: ParamMap) => params.get('id') ) );
  }

  goToPage(page: string, id?: number): void {
    const goto = id? [`/${ page }`, { id }] : [`/${ page }`];
    this.router.navigate(goto);
  }

  ngOnInit() {
    
  }

}