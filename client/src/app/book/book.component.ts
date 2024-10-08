import { Component } from '@angular/core';
import { IBook } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  book: IBook;
  selected: string;
  rating: number;

  constructor(private bookService: BookService, private route: ActivatedRoute, private _snackBar: MatSnackBar) {
    bookService.books$.subscribe(books => {
      this.book = books.find(book => book._id === route.snapshot.params['id']);

      if (this.book.wishList == true) {
        this.selected = 'wishList'
      } else if (this.book.completed == true) {
        this.selected = 'completedBooks'
      } else {
        this.selected = 'bookshelf'
      }

      this.rating = this.book.rating;
    })
  }


  changeShelf() {
    if (this.selected == 'completedBooks') {
      this.bookService.completedBook(this.book._id)
    } else if (this.selected == 'wishList') {
      this.bookService.addToWishList(this.book._id)
    } else {
      this.bookService.addToShelf(this.book._id)
    }
    
    this._snackBar.open('Shelf Changed', 'OK')
  }

  updateRating() {
    this.bookService.updateRating(this.book._id, this.rating);
    this._snackBar.open('Rating Updated', 'OK');
  }
}
