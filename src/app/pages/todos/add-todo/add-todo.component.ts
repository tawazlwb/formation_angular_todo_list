import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { combineLatest, forkJoin, map } from 'rxjs';
import { TodosService } from 'src/app/providers/todos/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  form = this.fb.array([this.createTodoForm()]);

  get controls() {
    return this.form.controls as FormGroup[];
  }

  constructor(private fb: FormBuilder, private service: TodosService) {}

  submit() {
    // if (!this.form.valid) return;
    const value = this.form.value;

    const calls = value.map((group) => this.service.addTodo(group));

    forkJoin(calls).subscribe(() => console.log('All todos added'));

    // this.service.addTodo(value).subscribe(() => console.log('Todo added'));
  }

  public addTodoForm() {
    this.form.push(this.createTodoForm());
  }

  private createTodoForm() {
    return this.fb.nonNullable.group({
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
