import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { CompletedBooksComponent } from './completed-books/completed-books.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { BookCardComponent } from './book-card/book-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookComponent } from './book/book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { ErrorComponent } from './error/error.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BookShelfComponent,
    CompletedBooksComponent,
    WishListComponent,
    BookCardComponent,
    NavBarComponent,
    AddBookComponent,
    BookComponent,
    EditBookComponent,
    ErrorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
