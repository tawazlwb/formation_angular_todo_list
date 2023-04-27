import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTodoComponent } from 'src/app/pages/todos/edit-todo/edit-todo.component';
import { EditTodoGuard } from 'src/app/pages/todos/edit-todo/edit-todo.guard';
import { ListTodosComponent } from 'src/app/pages/todos/list-todos/list-todos.component';

const routes: Routes = [
  {
    path: 'todos',
    children: [
      { path: '', component: ListTodosComponent },
      {
        path: 'add',
        // ? Lazy loading : load the component ONLY if the users goes to that URL
        loadChildren: () =>
          import('./pages/todos/add-todo/add-todo.module').then(
            (m) => m.AddTodoModule
          ),
      },
      {
        path: 'edit/:id',
        canActivate: [EditTodoGuard],
        component: EditTodoComponent,
      },
      { path: '**', redirectTo: 'todos', pathMatch: 'full' },
    ],
  },
  // ? Redirect route always use pathMatch "full"
  // ! Those 2 routes should always be last !
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: '**', redirectTo: 'todos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // ? Allows ANgular to treat what is after the # in the URL, so you don't have to setup your server to redriect every request to index.html
  exports: [RouterModule],
})
export class AppRoutingModule {}
