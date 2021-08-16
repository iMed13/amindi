import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length > limit) {
      return value.substring(0, limit);
    } else {
      return value;
    }
  }

}
