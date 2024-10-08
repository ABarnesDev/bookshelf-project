import { Component, Input } from '@angular/core';
import { IBook } from '../book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book: IBook;
}
