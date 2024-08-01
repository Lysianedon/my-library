import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiURL = 'http://localhost:3000/tasks'; // URL de l'API

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiURL}/${id}`).pipe(
      catchError((error) => {
        console.error(`Book with ID ${id} not found`, error);
        return throwError(() => new Error('Not Found'));
      })
    );
  }

  addBook(book: Book): Observable<void> {
    return this.http.post<void>(this.apiURL, book).pipe(
      catchError((error) => {
        console.error(`Book ${book.title} cannot be created`, error);
        return throwError(() => new Error('Creation error'));
      })
    );
  }

  updateBook(book: Book): Observable<void> {
    return this.http.put<void>(this.apiURL, book).pipe(
      catchError((error) => {
        console.error(`Book with ID ${book.id} not found`, error);
        return throwError(() => new Error('Not Found'));
      })
    );
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`).pipe(
      catchError((error) => {
        console.error(`Book with ID ${id} not found`, error);
        return throwError(() => new Error('Not Found'));
      })
    );
  }
}
