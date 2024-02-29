import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  public title: string = 'Book store';

  public booksTitle: string;

  constructor(){
    this.booksTitle = 'Books list';
  }

  ngOnInit():void {
    
  }

}
