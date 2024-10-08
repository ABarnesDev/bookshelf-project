import { Component } from '@angular/core';
import { IBook } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css']
})
export class BookShelfComponent {
  books: IBook[] = [];

  constructor(private bookService: BookService) {
    bookService.books$.subscribe((myBooks) => {
      this.books = myBooks.filter(book => book.completed == false && book.wishList == false && book.deleted == false)
    })
  }
}
