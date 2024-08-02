import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/**
 * The routes configuration for the application.
 * It defines the paths and associated components for the book management system.
 */
export const routes: Routes = [
    {path:"", component:BookListComponent},
    {path: "books", component:BookListComponent},
    {path: "books/add", component: AddBookComponent},
    {path: "books/:bookId/details", component: BookDetailComponent},
    {path: "books/:bookId/edit", component: EditBookComponent},
    { path: "**", component: PageNotFoundComponent } // 404 route
];
