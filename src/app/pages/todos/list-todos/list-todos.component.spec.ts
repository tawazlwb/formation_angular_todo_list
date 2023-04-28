import { StateService } from 'src/app/providers/state/state.service';
import { ListTodosComponent } from './list-todos.component';

fdescribe('ListTodosComponent', () => {
  let component: ListTodosComponent;
  let service: StateService;

  const todos: any = [];

  beforeEach(() => {
    service = {
      toggleTodoDone: jasmine.createSpy(),
      state$: todos,
    } as any;
    component = new ListTodosComponent(service);
  });

  it('Should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('markDone should call service.toggleTodoDone', () => {
    const todo = {} as any;
    component.markDone(todo);
    expect(service.toggleTodoDone).toHaveBeenCalledOnceWith(todo);
  });

  it('component.todos$ should be service.state$', () => {
    expect(component.todos$).toBe(service.state$);
  });

  it('Tracker should return a predtermined string', () => {
    const todo: ITodo = { id: 1, done: false, title: 'title', createdAt: 0 };
    const expected = `${todo.id}-${todo.title}-${todo.done}`;
    expect(component.tracker(0, todo)).toEqual(expected);
  });
});
