import { Component } from '@angular/core';
import { TodosService } from 'src/app/providers/todos/todos.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss'],
})
export class ListTodosComponent {
  constructor(private service: TodosService) {
    this.service.getTodosList().subscribe((todos) => {
      console.log('There is ' + todos.length + ' todos in the database');
    });
  }
}
