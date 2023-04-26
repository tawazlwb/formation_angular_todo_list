import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodosList() {
    return this.http.get<ITodo[]>('http://localhost:3000/todos');
  }

  toggleTodoDone(todo: ITodo) {
    const id = todo.id;
    const isDone = todo.done;

    return this.http
      .patch<ITodo>('http://localhost:3000/todos/' + id, {
        done: !isDone,
      })
      .pipe(map((response) => response.done));
  }
}
