import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodosList() {
    return this.http.get<ITodo[]>('http://localhost:3000/todos');
  }
}
