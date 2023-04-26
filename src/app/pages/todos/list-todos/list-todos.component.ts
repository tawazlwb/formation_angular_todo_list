import { Component } from '@angular/core';
import { StateService } from 'src/app/providers/state/state.service';
import { TodosService } from 'src/app/providers/todos/todos.service';

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

  tracker(id: number, todo: ITodo) {
    return `${todo.id}-${todo.title}-${todo.done}`;
  }
}
