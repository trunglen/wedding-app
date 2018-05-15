import { Pipe, PipeTransform } from '@angular/core';
import { Wedding } from '../../xmodel/wedding.service';

@Pipe({
  name: 'weddingFilter',
  pure: false
})
export class WeddingFilterPipe implements PipeTransform {

  transform(weddings: Wedding[], condition?: string): any {
    if (condition) {
      if (condition != 'warning') {
        return weddings.filter(w => {
          return w.status === condition
        })
      } else {
        const now = new Date().getTime()
        const warningLimit = 2 * 24 * 3600 * 1000
        return weddings.filter(w => {
          return w.htime - now < warningLimit
        })
      }
    }
    return weddings;
  }

}
