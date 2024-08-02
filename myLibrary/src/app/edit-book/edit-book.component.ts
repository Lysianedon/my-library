import { Component } from '@angular/core';
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
import { FormsModule } from '@angular/forms';

/**
 * EditBookComponent allows the user to edit an existing book's details.
 * It fetches the book data based on the route parameter 'bookId'
 * and provides a form for editing and saving the book details.
 */
@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,RouterLinkActive],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {
book!:Book;
constructor(private route: ActivatedRoute,private router: Router, private bookService : BookService, private _location: Location){}

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

  submit() {
    if(this.book){
      this.bookService.updateBook(this.book).subscribe((book) => {
        this.book = book;  
        this.goBack();
      } );
    }
  }
  /**
   * Method to navigate back to the previous location.
   */
  goBack() : void{
    this._location.back();
  }

}
