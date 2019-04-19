import { Pipe, PipeTransform } from '@angular/core';
import { formatTime } from '../app/helpers/common';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return formatTime(value);
  }

}
