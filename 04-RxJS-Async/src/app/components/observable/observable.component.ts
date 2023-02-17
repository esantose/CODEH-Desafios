import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from './../../services/book.service';
import { Book } from './../../book/book';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  observableBooks: Observable<Book[]> | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.observableBooks = this.bookService.getBooksWithObservable();
  }
}
