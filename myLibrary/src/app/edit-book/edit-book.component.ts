import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../../model/book.model';
import { BookService } from '../../service/book.service';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import {Location} from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,RouterLinkActive],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {
  @Output() addBook = new EventEmitter<Book>();
book!:Book;
constructor(private route: ActivatedRoute, private router: Router, private bookService : BookService, private _location: Location){}
ngOnInit(): void {

      this.route.paramMap.subscribe(params => {
        const id : string|null = params.get("bookId");
  
        if(id){
          this.bookService.getBookById(id).subscribe((book) => {
            this.book = book;
          } )
        }
  
        });
      };
  onEditBook() {
    if(this.book){
      this.bookService.updateBook(this.book).subscribe((book) => {
        console.log("book.id", book.id);
        this.book = book; 
        console.log("this.book.id", this.book.id);
        
        this.goBack();
      } );
     
    }
  }
  
  goBack() : void{
    this._location.back();
  }

}
