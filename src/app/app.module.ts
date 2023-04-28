import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectivesModule } from 'src/app/providers/ui/directives/directives.module';
import { PipesModule } from 'src/app/providers/ui/pipes/pipes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodosComponent } from './pages/todos/list-todos/list-todos.component';
import { TodoItemComponent } from './pages/todos/list-todos/todo-item/todo-item.component';
import { EditTodoComponent } from './pages/todos/edit-todo/edit-todo.component';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [AppComponent, ListTodosComponent, TodoItemComponent, EditTodoComponent, TestingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    PipesModule,
    DirectivesModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
