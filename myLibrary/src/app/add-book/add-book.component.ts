import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../../model/book.model';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  constructor(private _location: Location, private bookService: BookService) {}

  onAddBook() {
    if (this.newBook) {
      this.newBook.id = Date.now().toString();
      this.bookService.addBook(this.newBook).subscribe((book) => {
        this.newBook = book;
      });
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
