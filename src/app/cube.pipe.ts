import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  transform(v: number, ...args: unknown[]): number {
    return v*v;
  }

}
