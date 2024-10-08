import { Injectable } from '@angular/core';
import { IBook } from './book.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);
  public readonly books$: Observable<IBook[]> = this._books.asObservable();

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    // Get all books from the database and update _books
    this.http.get('api/getBooks').subscribe((response: any) => {
      this._books.next(response);
    })
  }

  addBook(book: Partial<IBook>) {
    // Add book to the database and update _books
    this.http.post('api/addBook', { book: book }).subscribe((response: any) => {
      if (response.status == 'error') {
        this._snackBar.open(response.message, 'OK')
      } else {
        this._books.next(this._books.getValue().concat([response]))
      }
    })
  }

  deleteBook(_id: string) {
    // Delete book from the database and update _books
    this.http.post('api/deleteBook', { _id: _id }).subscribe((response: any) => {
      if (response.status == 'error') {
        this._snackBar.open(response.message, 'OK')
      } else {
        this._books.next(this._books.getValue().filter(book => book._id != _id));
      }

    })
  }

  editBook(_id: string, book: Partial<IBook>) {
    // Update book in the database and update _books
    this.http.post('api/editBook', {_id: _id, book: book }).subscribe((response: any) => {
      if (response.status == 'error') {
        this._snackBar.open(response.message, 'OK')
      } else {
        var newBooks = this._books.getValue()
        var updatedBook = newBooks.find(book => book._id === _id);
        
        updatedBook.title = book.title;
        updatedBook.authors = book.authors;
        updatedBook.publisher = book.publisher;
        updatedBook.date = book.date;
        updatedBook.bookCoverURL = book.bookCoverURL;
        updatedBook.pages = book.pages;
        updatedBook.rating = book.rating;
        updatedBook.wishList = book.wishList;
        updatedBook.completed = book.completed;

        this._books.next(newBooks)
      }
    })
  }

  completedBook(_id: string) {
    // Change book's completed property to true in database and update _books
    this.http.post('api/completedBook', { _id: _id }).subscribe((response: any) => {
      if (response.status == 'error') {
        this._snackBar.open(response.message, 'OK')
      } else {
        var newBooks = this._books.getValue()
        var updatedBook = newBooks.find(book => book._id === _id);
        updatedBook.completed = true;
        updatedBook.wishList = false;

        this._books.next(newBooks)
      }
    })
  }

  addToWishList(_id: string) {
    // Change book's wishList property to true in database and update _books
    this.http.post('api/addToWishList', { _id: _id }).subscribe((response: any) => {
      if (response.status == 'error') {
        this._snackBar.open(response.message, 'OK')
      } else {
        var newBooks = this._books.getValue()
        var updatedBook = newBooks.find(book => book._id === _id);
        updatedBook.completed = false;
        updatedBook.wishList = true;

        this._books.next(newBooks)
      }
    })
  }

  addToShelf(_id: string) {
    // Change book's completed and wishList properties to false in database and update _books
    this.http.post('api/addToShelf', { _id: _id }).subscribe((response: any) => {
      if (response.status == 'error') {
        this._snackBar.open(response.message, 'OK')
      } else {
        var newBooks = this._books.getValue()
        var updatedBook = newBooks.find(book => book._id === _id);
        updatedBook.completed = false;
        updatedBook.wishList = false;

        this._books.next(newBooks)
      }
    })
  }

  updateRating(_id: string, rating: number) {
    // Change book's rating property to true in database and update _books
    this.http.post('api/updateRating', { _id: _id, rating: rating }).subscribe((response: any) => {
      if (response.status == 'error') {
        this._snackBar.open(response.message, 'OK')
      } else {
        var newBooks = this._books.getValue()
        var updatedBook = newBooks.find(book => book._id === _id);
        updatedBook.rating = rating;

        this._books.next(newBooks)
      }
    })
  }
}
