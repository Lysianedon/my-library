import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';

export const routes: Routes = [
    {path:"", component:BookListComponent},
    {path: "books", component:BookListComponent},
    {path: "books/add", component: AddBookComponent},
    {path: "books/:bookId/details", component: BookDetailComponent},
    {path: "books/:bookId/edit", component: EditBookComponent},
];
