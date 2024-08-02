import { Component, Input } from '@angular/core';
import { Book } from '../../model/book.model';
import { BookService } from '../../service/book.service';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import {Location} from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  book !: Book;

  constructor(private route: ActivatedRoute, private router: Router, private bookService : BookService, private _location: Location){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: string | null = params.get('bookId');
      if (id) {
        this.bookService.getBookById(id).subscribe({
          next: (book) => {
            this.book = book;
          },
          error: (error) => {
            console.error(error);
            this.router.navigate(['/404']);
          }
        });
      }
    });
  }

  /**
   * Method to navigate back to the previous location.
   */
  goBack() : void{
    this._location.back();
  }

}
