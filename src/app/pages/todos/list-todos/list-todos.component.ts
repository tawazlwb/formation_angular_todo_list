import { Component } from '@angular/core';
import { StateService } from 'src/app/providers/state/state.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss'],
})
export class ListTodosComponent {
  // ! When you create an observable variable, never re-assign it !
  readonly todos$ = this.service.state$;

  constructor(private service: StateService) {}

  markDone(todo: ITodo) {
    this.service.toggleTodoDone(todo);
  }

  // ? Tracking function for ngFor loops
  // ? When Angular creates a loop with ngFor, it tracks items with their memory reference. Using a tracking function, we can specify what to use instead, so here we use a string
  tracker(id: number, todo: ITodo) {
    return `${todo.id}-${todo.title}-${todo.done}`;
  }
}
