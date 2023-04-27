import { TestBed } from '@angular/core/testing';

import { EditTodoGuard } from './edit-todo.guard';

describe('EditTodoGuard', () => {
  let guard: EditTodoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditTodoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
