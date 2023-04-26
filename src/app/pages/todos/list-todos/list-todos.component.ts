import { Component } from '@angular/core';
import { TodosService } from 'src/app/providers/todos/todos.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss'],
})
export class ListTodosComponent {
  // ! When you create an observable variable, never re-assign it !
  readonly todos$ = this.service.getTodosList();

  constructor(private service: TodosService) {}

  markDone(todo: ITodo) {
    this.service.toggleTodoDone(todo).subscribe((isDone) => {
      console.log('Todo is now ' + isDone ? 'done' : 'to be done');
    });
    console.log('Mark todo #' + todo.id + ' as done');
  }
}
