import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { CompletedBooksComponent } from './completed-books/completed-books.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookComponent } from './book/book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: BookShelfComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'completed-books',
    component: CompletedBooksComponent
  },
  {
    path: 'wish-list',
    component: WishListComponent
  },
  {
    path: 'add-book',
    component: AddBookComponent
  },
  {
    path: 'book/:id',
    component: BookComponent
  },
  {
    path: 'edit-book/:id',
    component: EditBookComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
