import { Pipe, PipeTransform } from '@angular/core';
import {Tour} from '../app/helper-files/tour-interface';
@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(tourList: Tour[], typeparameter ?: string): Tour[] {

    if(typeparameter==null || typeparameter==" "){
      return tourList.filter(t=>t.type == null );
    }

    return tourList.filter(t=>t.type == typeparameter );
  }

}
