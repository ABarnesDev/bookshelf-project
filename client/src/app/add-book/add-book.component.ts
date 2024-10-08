import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from '../book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private bookService: BookService, private router: Router) {
  }

  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    authors: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    bookCoverURL: new FormControl('', [Validators.required]),
    pages: new FormControl('', [Validators.required]),
    shelf: new FormControl('', [Validators.required])
  })

  addBook() {
    let book: Partial<IBook> = {
      title: this.bookForm.value.title,
      authors: this.bookForm.value.authors,
      publisher: this.bookForm.value.publisher,
      date: this.bookForm.value.date,
      bookCoverURL: this.bookForm.value.bookCoverURL,
      pages: this.bookForm.value.pages,
      rating: 0,
      deleted: false
    };

    if (this.bookForm.value.shelf == "wishList") {
      book.wishList = true;
      book.completed = false;
    } else if (this.bookForm.value.shelf == "bookshelf") {
      book.wishList = false;
      book.completed = false;
    } else {
      book.wishList = false;
      book.completed = true;
    }

    this.bookService.addBook(book)

    if (book.wishList == true) {
      this.router.navigate(['/wish-list'])
    } else if (book.completed == true) {
      this.router.navigate(['/completed-books'])
    } else {
      this.router.navigate([''])
    }
  }

}
