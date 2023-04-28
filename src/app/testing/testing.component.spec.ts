import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { Subject, delay, of } from 'rxjs';
import { TodosService } from 'src/app/providers/todos/todos.service';
import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingComponent],
      imports: [MatCardModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should contain a mat-card', () => {
    const parentContainerElement: HTMLElement = fixture.nativeElement;
    const card = parentContainerElement.querySelector('mat-card');

    expect(card).toBeTruthy();
  });

  describe('Function createTodo', () => {
    it('Should exist', () => {
      expect(component.createTodo).toBeDefined();
    });

    it('Should call service.addTodo', () => {
      const service = TestBed.inject(TodosService);

      service.addTodo = jasmine.createSpy('addTodo').and.returnValue(of({}));

      component.createTodo();

      expect(service.addTodo).toHaveBeenCalled();
    });

    it('Should call service.addTodo().subscribe', () => {
      const service = TestBed.inject(TodosService);

      const ret = of({});

      service.addTodo = jasmine.createSpy('addTodo').and.returnValue(ret);
      ret.subscribe = jasmine.createSpy();

      component.createTodo();

      expect(ret.subscribe).toHaveBeenCalled();
    });

    it('Should save todo from service.createTodo, into variable todo, when delayed', (done) => {
      const service = TestBed.inject(TodosService);

      const ret: any = {};

      service.addTodo = jasmine.createSpy('addTodo').and.returnValue(of(ret));

      component.createTodoDelayed();

      setTimeout(() => {
        expect(component.todo).toBe(ret);
        done();
      }, 501);
    });

    it('Should save todo from service.createTodo, into variable todo, not delayed', (done) => {
      const service = TestBed.inject(TodosService);

      const ret: any = {};
      const subject = new Subject<any>();
      const source$ = subject.asObservable();

      service.addTodo = jasmine.createSpy('addTodo').and.returnValue(source$);

      component.createTodo();

      source$.pipe(delay(1)).subscribe(() => {
        expect(component.todo).toBe(ret);
        done();
      });

      subject.next(ret);
    });
  });
});

describe('TestingComponent isolated', () => {
  let component: TestingComponent;
  let service: TodosService;

  beforeEach(() => {
    service = {
      addTodo: jasmine.createSpy().and.returnValue(of({}))
    } as any;
    component = new TestingComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Function createTodo', () => {
    it('Should exist', () => {
      expect(component.createTodo).toBeDefined();
    });

    it('Should call service.addTodo', () => {
      service.addTodo = jasmine.createSpy('addTodo').and.returnValue(of({}));

      component.createTodo();

      expect(service.addTodo).toHaveBeenCalled();
    });

    it('Should call service.addTodo().subscribe', () => {
      const ret = of({});

      service.addTodo = jasmine.createSpy('addTodo').and.returnValue(ret);
      ret.subscribe = jasmine.createSpy();

      component.createTodo();

      expect(ret.subscribe).toHaveBeenCalled();
    });

    it('Should save todo from service.createTodo, into variable todo, when delayed', (done) => {
      const ret: any = {};

      service.addTodo = jasmine.createSpy('addTodo').and.returnValue(of(ret));

      component.createTodoDelayed();

      setTimeout(() => {
        expect(component.todo).toBe(ret);
        done();
      }, 501);
    });

    it('Should save todo from service.createTodo, into variable todo, not delayed', (done) => {
      const ret: any = {};
      const subject = new Subject<any>();
      const source$ = subject.asObservable();

      service.addTodo = jasmine.createSpy('addTodo').and.returnValue(source$);

      component.createTodo();

      source$.pipe(delay(1)).subscribe(() => {
        expect(component.todo).toBe(ret);
        done();
      });

      subject.next(ret);
    });
  });
});
