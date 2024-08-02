import { Component, Input } from '@angular/core';
import { Book } from '../../model/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css',
})
export class BookItemComponent {
  @Input() book!: Book;

  constructor() {}
}
