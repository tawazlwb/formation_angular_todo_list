import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs';
import { TodosService } from 'src/app/providers/todos/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  form = this.fb.nonNullable.group({
    // ? Syntax: [controlValue, SyncValidators, AsyncValidators]
    // ? Validators can be composed by putting them into an array (   [value, [], []]   )
    title: [
      '',
      [Validators.required, Validators.minLength(3) /* isEqualToYYY() */],
      [
        /* todoExists(this.service) */
      ],
    ],
    content: ['', []],
  });

  constructor(private fb: FormBuilder, private service: TodosService) {}

  submit() {
    if (!this.form.valid) return;
    const value = this.form.value;

    this.service.addTodo(value).subscribe(() => console.log('Todo added'))
  }
}

// ? Custom, synchronous validator
function isEqualToYYY(): ValidatorFn {
  return (control: AbstractControl) => {
    return control.value === 'yyy' ? null : { yyy: 'Write YYY' };
  };
}

// ? Custom, asynchronous validator
function todoExists(service: TodosService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return service
      .todoExists(control.value)
      .pipe(map((exists) => (exists ? { exists: true } : null)));
  };
}
