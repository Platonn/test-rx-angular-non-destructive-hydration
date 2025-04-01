import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Person } from './person.interface';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [CommonModule],
  template: `{{ person.name }} `,
})
export class PersonCardComponent {
  @Input({ required: true }) person!: Person;

  ngOnChanges(changes: SimpleChanges): void {
    const start = performance.now();
    while (performance.now() - start < 500) {
      // Simulating long synchronous work. 500ms is exaggerated, but it's just an example for visualizing the effect of non-destructive hydration
      // Then RxFor will render each component in separate task
      // Unfortunately hydration is considered done by Angular much earlier than all the components are rendered
      // So the DOM is destroyed and recreated, while the components are re-rendered in separate tasks
    }
  }
}
