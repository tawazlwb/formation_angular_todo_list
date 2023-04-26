import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {
  // ? Creates a controllable obsevable : can be subscribed to, or data can be sent into it
  private _stateChanger = new BehaviorSubject<any>(null);
  // ? Listen to the changes on the controllable observer
  private stateChanger$ = this._stateChanger.asObservable();

  // ? Transforms the content of the controllable observer
  public todos$ = this.stateChanger$.pipe(
    // ? Switchmap : replace an observable by another (here use the list of todos instead of the value of the controllable observer)
    switchMap(() => this.getTodosList())
  );

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
      .pipe(
        map((response) => response.done),
        // ? When the HTTP call is made, make a side effect (tap) to trigger the controllable observer (next)
        // ? We can send any value in it because we will not use it (since we use switchMap above)
        tap(() => this._stateChanger.next(Math.random()))
      );
  }
}
