import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { TodosService } from 'src/app/providers/todos/todos.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent {
  todo?: ITodo;

  constructor(private service: TodosService) {}

  createTodoDelayed() {
    this.service
      .addTodo({} as any)
      .pipe(delay(500))
      .subscribe((todo) => {
        this.todo = todo as ITodo;
      });
  }

  createTodo() {
    this.service
      .addTodo({} as any)
      .subscribe((todo) => {
        this.todo = todo as ITodo;
      });
  }
}
