import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodosService } from 'src/app/providers/todos/todos.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  // ? Behavior subject to control the state
  private _state = new BehaviorSubject<ITodo[]>(this.createInitialState());

  // ? State that can be used by components to listen to changes
  public state$ = this._state.asObservable();

  // ? State at the time T (useful sometimes)
  public get state() {
    return this._state.value;
  }

  constructor(private service: TodosService) {
    this.setTodos();
  }

  private createInitialState(): ITodo[] {
    return [];
  }

  setTodos() {
    this.service.getTodosList().subscribe((todos) => this._state.next(todos));
  }

  addTodo(todo: ITodo) {
    // ? Create a new list of todos, and place the new todo at the start of the list
    const newList = [todo, ...this.state];
    this._state.next(newList);
  }

  deleteTodo(id: number) {
    // ? Remove one todo from the list by filtering the todos : if the todo ID is equal to the ID parameter => don't add the todo to the newList
    const list = this.state;
    const newList = list.filter((todo) => todo.id !== id);
    this._state.next(newList);
  }

  // ! Never do that ! (only for demo purposes)
  // ! State management design pattern = never modify a state, always create a new state from the previous state
  updateTodo(id: number, newTodo: Partial<ITodo>) {
    let todo = this.state.find((t) => t.id === id);
    // ? array.find can return undefined : it it does, throw an error
    if (!todo) throw new Error('Todo not found, cannot be updated');
    // ? Pass-by sharing : if we do todo = newTodo, we change the memory reference of the variable todo, NOT the value of the object found !
    // ? By using object.assign, we REALLY edit the memory reference of the object found
    Object.assign(todo, newTodo);
  }

  toggleTodoDone(todo: ITodo) {
    // ? Call the service to update the todo in the database, and when the call is done, update the state
    this.service.toggleTodoDone(todo).subscribe({
      next: () => {
        this.updateTodo(todo.id, { done: !todo.done });
      },
      error: () => {
        console.error('Todo not updated');
      },
    });
  }
}
