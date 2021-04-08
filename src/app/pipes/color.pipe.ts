import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: Color[], filterText:string): Color[] {
    filterText=filterText ? filterText.toLocaleLowerCase() : ""
    return filterText ? value.filter(x=>x.colorName.toLocaleLowerCase().startsWith(filterText)!=false) : value
  }

}
