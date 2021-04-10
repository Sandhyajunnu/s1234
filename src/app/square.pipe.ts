import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(s:number, ...args: unknown[]): number {
    return s*s;
  }

}
