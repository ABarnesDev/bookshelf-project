import { Component } from '@angular/core';
import { IBook } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  books: IBook[] = [];

  constructor(private bookService: BookService) {
    bookService.books$.subscribe((myBooks) => {
      this.books = myBooks.filter(book => book.wishList == true && book.deleted == false);
    })
  }
}
