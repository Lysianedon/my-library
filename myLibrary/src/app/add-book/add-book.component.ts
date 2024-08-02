import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../../model/book.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [Router, ActivatedRoute, FormsModule, Location],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {
  newBook: Book = {
    id: '',
    title: '',
    author: '',
    description: '',
    status: 'available',
  };

  @Output() addBook = new EventEmitter<Book>();

  constructor(private _location: Location, private bookService: BookService) {}

  onAddBook() {
    if (this.newBook) {
      this.newBook.id = Date.now().toString();
      this.bookService.addBook(this.newBook);
      this.newBook = {
        id: '',
        title: '',
        author: '',
        description: '',
        status: 'available',
      };
      this._location.back();
    }
  }
}
