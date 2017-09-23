import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subFilter'
})

export class SubFilterPipe implements PipeTransform {
  transform(array: any[], args: string): Array<any> {
    return array.filter(item => item.subsystem == args);
  }
}
