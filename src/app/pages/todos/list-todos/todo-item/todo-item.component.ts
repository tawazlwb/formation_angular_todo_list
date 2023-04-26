import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

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

  // ? Bind to an attribute of the component (style.xxx, class.xxx, attr.xxx, etc)
  @HostBinding('style.opacity')
  get componentOpacity() {
    return this.todo?.done ? 0.3 : 1;
  }

  // ? Listen to events on the component
  // ? To get the event, follow this syntax
  @HostListener('click', ['$event'])
  onComponentClick(event: MouseEvent) {
    console.log(
      `Clicking on the card at position ${event.clientX},${event.clientY} is useless, click on the button !`
    );
  }
}
