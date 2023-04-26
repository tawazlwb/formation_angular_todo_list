import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  // ? Input : send data to the child element
  @Input()
  todo?: ITodo;

  // ? Output : send data to the parent element (call "emit")
  @Output()
  done = new EventEmitter<void>();
}
