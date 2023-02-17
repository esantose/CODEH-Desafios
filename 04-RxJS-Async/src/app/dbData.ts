import { InMemoryDbService } from 'angular-in-memory-web-api';

export class dbData implements InMemoryDbService {
  createDb() {
    let books = [
      { id: 1, name: 'C#' },
      { id: 2, name: 'VB.nat' },
      { id: 3, name: 'Vue' },
      { id: 4, name: 'Node JS' },
      { id: 5, name: 'Core Java' },
      { id: 6, name: 'Angular' },
      { id: 7, name: 'React' },
      { id: 8, name: 'Spring' },
    ];
    return { books: books };
  }
}
