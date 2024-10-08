import { Component } from '@angular/core';
import { IBook } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-completed-books',
  templateUrl: './completed-books.component.html',
  styleUrls: ['./completed-books.component.css']
})
export class CompletedBooksComponent {
  books: IBook[] = [];

  constructor(private bookService: BookService) {
    bookService.books$.subscribe((myBooks) => {
      this.books = myBooks.filter(book => book.completed == true && book.deleted == false);
    })
  }
}
