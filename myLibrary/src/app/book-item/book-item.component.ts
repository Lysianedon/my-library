import { Component, Output, Input } from '@angular/core';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css',
})
export class BookItemComponent {
  @Input() book!: Book;

  constructor() {}
}
