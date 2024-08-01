import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../model/book.model';
import { BookItemComponent } from '../book-item/book-item.component';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AddBookComponent,
    BookItemComponent,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books$: Observable<Book[]> = new Observable<Book[]>();
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }
  onRemove(id: string): void {
    return;
  }

  addBook(book: Book) {
    return;
  }
}
