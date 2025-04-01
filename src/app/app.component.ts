import { Component } from '@angular/core';
import { PersonListComponent } from './person-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonListComponent],
  template: `
    <div class="app">
      <h1>{{ title }}</h1>
      <app-person-list />
    </div>
  `,
})
export class AppComponent {
  title = 'test-rx-angular-non-destructive-hydration';
}
