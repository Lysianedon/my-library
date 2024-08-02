import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

// BookService provides CRUD operations for managing books. 
//It communicates with a backend API to perform actions like retrieving, creating, updating, and deleting books.
export class BookService {
  //API url
  private apiURL = 'http://localhost:3000/books'; 

  constructor(private http: HttpClient) {}

  // Get the list of books
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL);
  }

  // Get a book by its id. Return the book or throws an error if the book is not found.
  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiURL}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(`Book with ID ${id} not found`, error);
        return throwError(() => new Error('Not Found'));
      })
    );
  }

  // Create a book. Return the newly added book or throws an error if the method fails.
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiURL, book).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(`Book ${book.title} cannot be created`, error);
        return throwError(() => new Error('Creation error'));
      })
    );
  }

  // Update a book by its id. Return the updated book or throws an error if the book is not found.
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiURL}/${book.id}`, book).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(`Book with ID ${book.id} not found`, error);
        return throwError(() => new Error('Not Found'));
      })
    );
  }

  // Delete a book by its id. Throws an error if the book is not found.
  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(`Book with ID ${id} not found`, error);
        return throwError(() => new Error('Not Found'));
      })
    );
  }
}
