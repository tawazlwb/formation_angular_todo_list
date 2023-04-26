import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTodoColor]',
})
export class TodoColorDirective {
  @Input()
  todo?: ITodo;

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnChanges() {
    if (this.todo?.done) {
      const element = this.elRef.nativeElement;
      this.renderer.setStyle(element, 'background-color', 'salmon');
    }
  }
}
