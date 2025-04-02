import { CommonModule } from '@angular/common';
import { Component, inject, PendingTasks, SimpleChanges } from '@angular/core';
import { RxFor } from '@rx-angular/template/for';
import { firstValueFrom, Observable, Subject } from 'rxjs';
import { PersonCardComponent } from './person-card.component';
import { Person } from './person.interface';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, PersonCardComponent, RxFor],
  template: `
    <h2>People</h2>
    <div class="person-list">
      <ng-container
        *rxFor="
          let person of people$;
          trackBy: trackById;
          renderCallback: itemsRendered
        "
      >
        <app-person-card [person]="person" />
      </ng-container>
    </div>
  `,
  styles: [
    `
      .person-list {
        display: flex;
      }
      app-person-card {
        flex-direction: column;
        flex: 1;
        gap: 20px;
        border: 3px solid red;
        padding: 1rem;
        &:nth-child(odd) {
          border: 3px solid blue;
        }
      }
    `,
  ],
})
export class PersonListComponent {
  people$: Observable<Person[]>;

  constructor(private personService: PersonService) {
    this.people$ = this.personService.getPeople();
  }

  trackById(index: number, item: Person): number {
    return item.id;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const start = performance.now();
    while (performance.now() - start < 60) {
      // Simulating long synchronous work
    }
  }

  itemsRendered = new Subject<Person[]>();
  pendingTasks = inject(PendingTasks);

  ngOnInit() {
    // Tell Angular to wait with considering the app as "stable"
    // until RxLet tells that all the items were rendered
    this.pendingTasks.run(() => firstValueFrom(this.itemsRendered));
  }
}
