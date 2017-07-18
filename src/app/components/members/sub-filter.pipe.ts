import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subFilter'
})

export class SubFilterPipe implements PipeTransform {
  transform(items: any[], args: any[]): any {
    return items.filter(item => item.subsystem == "Brakes");
  }
}
