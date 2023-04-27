import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AddTodoRoutingModule } from './add-todo-routing.module';
import { AddTodoComponent } from './add-todo.component';

@NgModule({
  declarations: [AddTodoComponent],
  imports: [
    CommonModule,
    AddTodoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class AddTodoModule {}
