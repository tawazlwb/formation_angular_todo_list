import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTodosComponent } from 'src/app/pages/todos/list-todos/list-todos.component';

const routes: Routes = [
  { path: 'todos-list', component: ListTodosComponent },
  // ! Those 2 routes should always be last !
  { path: '', redirectTo: 'todos-list', pathMatch: 'full' }, // ? Redirect route always use pathMatch "full"
  { path: '**', redirectTo: 'todos-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // ? Allows ANgular to treat what is after the # in the URL, so you don't have to setup your server to redriect every request to index.html
  exports: [RouterModule],
})
export class AppRoutingModule {}
