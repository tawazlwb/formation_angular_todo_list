import { TodoColorDirective } from './todo-color.directive';

describe('TodoColorDirective', () => {
  it('should create an instance', () => {
    const directive = new TodoColorDirective(null!, null!);
    expect(directive).toBeTruthy();
  });
});
