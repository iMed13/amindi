import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(value: any): any {
    if (value !== undefined) {
      if (value.toString().length == 1) {
        return '0' + value
      } else {
        return value
      }
    }
  }

}
