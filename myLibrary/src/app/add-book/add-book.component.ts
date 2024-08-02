import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../../model/book.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
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

  constructor() {}

  onAddBook() {
    if (this.newBook) {
      this.newBook.id= Date.now().toString();
      this.addBook.emit(this.newBook);
      this.newBook = {
        id: '',
        title: '',
        author: '',
        description: '',
        status: 'available',
      };
    }
  }
}
