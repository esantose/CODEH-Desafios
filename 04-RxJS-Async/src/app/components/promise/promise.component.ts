import { Component, OnInit } from '@angular/core';
import { BookService } from './../../services/book.service';
import { Book } from './../../book/book';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  promiseBooks: Promise<Book[]> | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.promiseBooks = this.bookService.getBooksWithPromise();
  }
}
