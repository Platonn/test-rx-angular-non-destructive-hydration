import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from './person.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private mockData: Person[] = [
    {
      id: 1,
      name: 'Alice',
    },
    {
      id: 2,
      name: 'Bob',
    },
    {
      id: 3,
      name: 'Charlie',
    },
    {
      id: 4,
      name: 'Diana',
    },
    {
      id: 5,
      name: 'Eve',
    },
    {
      id: 6,
      name: 'Frank',
    },
  ];

  getPeople(): Observable<Person[]> {
    return of(this.mockData);
  }
}
