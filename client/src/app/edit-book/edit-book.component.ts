import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  book: IBook;

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) {
    bookService.books$.subscribe(books => {
      this.book = books.find(book => book._id === route.snapshot.params['id']);
      this.bookForm.get('title').setValue(this.book.title);
      this.bookForm.get('authors').setValue(this.book.authors);
      this.bookForm.get('publisher').setValue(this.book.publisher);
      this.bookForm.get('date').setValue(this.book.date);
      this.bookForm.get('bookCoverURL').setValue(this.book.bookCoverURL);
      this.bookForm.get('pages').setValue(this.book.pages);

      if (this.book.completed == true) {
        this.bookForm.get('shelf').setValue('completedBooks');
      } else if (this.book.wishList == true) {
        this.bookForm.get('shelf').setValue('wishList');
      } else {
        this.bookForm.get('shelf').setValue('bookshelf');
      }
    })
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

  editBook() {
    let book: Partial<IBook> = {
      title: this.bookForm.value.title,
      authors: this.bookForm.value.authors,
      publisher: this.bookForm.value.publisher,
      date: this.bookForm.value.date,
      bookCoverURL: this.bookForm.value.bookCoverURL,
      pages: this.bookForm.value.pages,
      rating: this.book.rating,
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

    this.bookService.editBook(this.book._id, book);

    this.router.navigate([`/book/${this.route.snapshot.params['id']}`])
  }

  deleteBook() {
    this.bookService.deleteBook(this.book._id);

    if (this.book.completed == true) {
      this.router.navigate(['/completed-books']);
    } else if (this.book.wishList == true) {
      this.router.navigate(['wish-list']);
    } else {
      this.router.navigate(['']);
    }
  }

}
