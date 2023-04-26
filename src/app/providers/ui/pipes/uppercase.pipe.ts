import { Pipe, PipeTransform } from '@angular/core';

// ? Uppercase pipe, same as Angular, just for demo purposes
@Pipe({
  name: 'uppercaseBis',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string): unknown {
    return value.toLocaleUpperCase();
  }
}
