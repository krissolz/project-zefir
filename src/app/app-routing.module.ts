import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './pages/books-list/books.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CartComponent } from './pages/cart/cart.component';
import { BookComponent } from './pages/book/book.component';
import { SuccessComponent } from './pages/success/success.component';


const routes: Routes = [
    {
        path: 'book',
        component: BookComponent
    },
    {
        path: 'book/:id',
        component: BookComponent
    },
    {
        path: 'mycart',
        component: CartComponent
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: BooksListComponent
    },
    {
        path: 'success',
        component: SuccessComponent
    },
    {
        path: '404/:error',
        component: NotfoundComponent
    },
    {
        path: '404',
        component: NotfoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
