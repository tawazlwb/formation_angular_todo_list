import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoColorDirective } from './todo-color.directive';



@NgModule({
  declarations: [
    TodoColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoColorDirective
  ]
})
export class DirectivesModule { }
