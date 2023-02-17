import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { Book } from './../book/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'api/books';
  constructor(private http: HttpClient) {}

  //Returns Observable<Book[]>
  getBooksWithObservable(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  //Returns Promise<Book[]>
  getBooksWithPromise(): Promise<Book[]> {
    return this.http.get<Book[]>(this.url).toPromise() as Promise<Book[]>;
  }
}
