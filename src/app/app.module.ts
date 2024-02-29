import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatePipe, CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './pages/books-list/books.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CartComponent } from './pages/cart/cart.component';
import { BookComponent } from './pages/book/book.component';

import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ServiceModule } from './core/services/service.module';
import { SuccessComponent } from './pages/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    NotfoundComponent,
    CartComponent,
    BookComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceModule,
    CoreModule,
    // FormsModule,
    // ReactiveFormsModule,
    CommonModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
